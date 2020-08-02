import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Router from 'next/router';
import styled from 'styled-components';
import FormStyles, { FormContainer } from './styles/FormStyles';
import Error from './ErrorMessage';
import formatMoney from '../lib/formatMoney';

const CREATE_ITEM_MUTATION = gql`
  mutation CREATE_ITEM_MUTATION(
    $title: String!
    $description: String!
    $price: Int!
    $image: String
    $largeImage: String
  ) {
    createItem(
      title: $title
      description: $description
      price: $price
      image: $image
      largeImage: $largeImage
    ) {
      id
    }
  }
`;

class CreateItem extends Component {
  state = {
    title: '',
    description: '',
    image: '',
    largeImage: '',
    price: '',
  };

  handleChange = (e) => {
    const { name, type, value } = e.target;
    const val = type === 'number' ? parseFloat(value) : value;
    this.setState({ [name]: val });
  };

  uploadFile = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append('file', files[0]);
    data.append('upload_preset', 'static-electronics');

    const res = await fetch(
      'https://api.cloudinary.com/v1_1/cbilladeau/image/upload',
      { method: 'POST', body: data }
    );
    const file = await res.json();
    this.setState({
      image: file.secure_url,
      largeImage: file.eager[0].secure_url,
    });
  };

  render() {
    return (
      <FormContainer>
        <Mutation mutation={CREATE_ITEM_MUTATION} variables={this.state}>
          {(createItem, { data, loading, error }) => (
            <FormStyles
              onSubmit={async (e) => {
                // stop the form from submitting
                e.preventDefault();
                // call the mutation
                const res = await createItem();
                // change user to the single item page
                Router.push({
                  pathname: '/item',
                  query: { id: res.data.createItem.id },
                });
              }}
            >
              <Error error={error} />
              <fieldset disabled={loading} aria-busy={loading}>
                <label htmlFor='title'>
                  <input
                    type='text'
                    id='title'
                    name='title'
                    placeholder='Title'
                    value={this.state.title}
                    onChange={this.handleChange}
                    required
                  />
                </label>
                <label htmlFor='price'>
                  <input
                    type='number'
                    id='price'
                    name='price'
                    placeholder='Price'
                    value={this.state.price}
                    onChange={this.handleChange}
                    required
                  />
                </label>
                <label htmlFor='description'>
                  <textarea
                    type='text'
                    id='description'
                    name='description'
                    placeholder='Enter A Description'
                    value={this.state.description}
                    onChange={this.handleChange}
                    required
                  />
                </label>

                <label htmlFor='file'>
                  Upload Image
                  <input
                    type='file'
                    id='file'
                    name='file'
                    placeholder='Upload an image'
                    onChange={this.uploadFile}
                    required
                  />
                  {this.state.image && (
                    <img
                      src={this.state.image}
                      width='200'
                      alt='Upload Preview'
                    />
                  )}
                </label>

                <button type='submit'>Submit</button>
              </fieldset>
            </FormStyles>
          )}
        </Mutation>
      </FormContainer>
    );
  }
}

export default CreateItem;
export { CREATE_ITEM_MUTATION };
