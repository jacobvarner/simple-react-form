import React, { Component } from 'react';
import rightArrow from './rightArrow.svg';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      address: '',
      addressTwo: '',
      firstNameError: false,
      lastNameError: false,
      addressError: false,
      isLoading: false
    };

    this.onTextBoxChange = this.onTextBoxChange.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
  }

  onTextBoxChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    const nameError = target.name + 'Error';

    this.setState({
      [name]: value,
      [nameError]: false
    });
  }

  onSubmitForm(event) {
    this.setState({ isLoading: true });
    const { firstName, lastName, address, addressTwo } = this.state;
    event.preventDefault();
    if (firstName === '') {
      this.setState({ firstNameError: true });
    } else {
      this.setState({ firstNameError: false });
    }
    if (lastName === '') {
      this.setState({ lastNameError: true });
    } else {
      this.setState({ lastNameError: false });
    }
    if (address === '') {
      this.setState({ addressError: true });
    } else {
      this.setState({ addressError: false });
    }
    if (firstName !== '' && lastName !== '' && address !== '') {
      alert(
        'firstName: ' +
          firstName +
          '\nlastName: ' +
          lastName +
          '\naddress: ' +
          address +
          '\naddressTwo: ' +
          addressTwo
      );

      this.setState({
        isLoading: false,
        firstName: '',
        lastName: '',
        address: '',
        addressTwo: '',
        firstNameError: false,
        lastNameError: false,
        addressError: false
      });
    }
  }

  render() {
    const {
      firstName,
      lastName,
      address,
      addressTwo,
      firstNameError,
      lastNameError,
      addressError
    } = this.state;
    return (
      <div className="form-container">
        <form className="form" onSubmit={this.onSubmitForm}>
          <label id="first-name-label" for="firstName">
            First Name{' '}
            {firstNameError ? (
              <span className="required-text">Required</span>
            ) : null}
          </label>
          <input
            id="first-name"
            type="text"
            name="firstName"
            value={firstName}
            onChange={this.onTextBoxChange}
            className={
              firstNameError ? 'error' : firstName !== '' ? 'filled' : null
            }
          />
          <label id="last-name-label" for="lastName">
            Last Name{' '}
            {lastNameError ? (
              <span className="required-text">Required</span>
            ) : null}
          </label>
          <input
            id="last-name"
            type="text"
            name="lastName"
            value={lastName}
            onChange={this.onTextBoxChange}
            className={
              lastNameError ? 'error' : lastName !== '' ? 'filled' : null
            }
          />
          <label id="address-label" for="address">
            Address{' '}
            {addressError ? (
              <span className="required-text">Required</span>
            ) : null}
          </label>
          <input
            id="address"
            type="text"
            name="address"
            value={address}
            onChange={this.onTextBoxChange}
            className={
              addressError ? 'error' : address !== '' ? 'filled' : null
            }
          />
          <label id="address-two-label" for="addressTwo">
            Address 2 (Optional)
          </label>
          <input
            id="address-two"
            type="text"
            name="addressTwo"
            value={addressTwo}
            onChange={this.onTextBoxChange}
            className={addressTwo !== '' ? 'filled' : null}
          />
          <button id="submit" type="submit">
            Next
            <img src={rightArrow} alt="arrow" />
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
