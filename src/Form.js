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
      phoneNumber: '',
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
    let value = target.value;
    let name = target.name;
    const nameError = target.name + 'Error';

    if (name === 'phoneNumber') {
      console.log('Name: ' + name);
      console.log('Value: ' + value);
      let matchSpace = /\ /g;
      let matchNumber = /\d/g;
      let matchLetter = /[^\d\(\)\-\ ]/g;
      let matchNumberOrOpenParentheses = /\d|\(/g;
      let matchNumberOrCloseParentheses = /\d|\)/g;
      let matchNumberOrDash = /\d|\-/g;

      if (matchLetter.test(value.charAt(value.length - 1))) {
        value = value.slice(0, -1);
      } else if (value.length === 1) {
        if (matchNumberOrOpenParentheses.test(value)) {
          if (matchNumber.test(value)) {
            value = '(' + value;
          }
        }
      } else if (value.length === 5) {
        if (matchNumberOrCloseParentheses.test(value.charAt(4))) {
          if (matchNumber.test(value.charAt(4))) {
            let valueArray = value.split('');
            valueArray.splice(4, 0, ') ');
            value = valueArray.join('');
          }
        }
      } else if (value.length === 6) {
        if (!matchSpace.test(value.charAt(5))) {
          let valueArray = value.split('');
          valueArray.splice(5, 0, ' ');
          value = valueArray.join('');
        }
      } else if (value.length === 10) {
        if (matchNumberOrDash.test(value.charAt(9))) {
          if (matchNumber.test(value.charAt(9))) {
            let valueArray = value.split('');
            valueArray.splice(9, 0, '-');
            value = valueArray.join('');
          }
        }
      } else if (value.length > 14) {
        value = value.slice(0, -1);
      }
    }

    this.setState({
      [name]: value,
      [nameError]: false
    });
  }

  onSubmitForm(event) {
    this.setState({ isLoading: true });
    const {
      firstName,
      lastName,
      address,
      addressTwo,
      phoneNumber
    } = this.state;
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
          addressTwo +
          '\nphoneNumber: ' +
          phoneNumber
      );

      this.setState({
        isLoading: false,
        firstName: '',
        lastName: '',
        address: '',
        addressTwo: '',
        phoneNumber: '',
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
      phoneNumber,
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
          <label id="address-two-label" for="addressTwo">
            Phone Number (Optional)
          </label>
          <input
            id="phone-number"
            type="text"
            name="phoneNumber"
            value={phoneNumber}
            onChange={this.onTextBoxChange}
            className={phoneNumber !== '' ? 'filled' : null}
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
