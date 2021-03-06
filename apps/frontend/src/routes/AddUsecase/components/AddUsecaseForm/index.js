// libs
import React from 'react';
import PropTypes from 'prop-types';
import {reduxForm, Field, submit, reset} from 'redux-form';
// components
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import {
  TextField,
} from 'redux-form-material-ui';

class AddUsecaseForm extends React.Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    pristine: PropTypes.bool.isRequired,
    reset: PropTypes.func.isRequired,
    submitting: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired,
  };

  submit = () => {
    this.props.dispatch(submit('addUsecaseForm'));
  }

  render() {
    const {handleSubmit, pristine, reset, submitting} = this.props;
    return (
      <Card>
        <CardHeader
          title={<h2>New Usecase</h2>}
        />

        <CardText>
          <form onSubmit={handleSubmit}>
            <div>
              <Field name="title" component={TextField} hintText="Title" fullWidth />
            </div>
            <div>
              <Field
                name="body"
                component={TextField}
                hintText="Body"
                multiLine
                rows={5}
                fullWidth
              />
            </div>
          </form>
        </CardText>

        <CardActions style={{textAlign: 'right'}}>
          <RaisedButton label="Reset" disabled={pristine || submitting} onClick={reset} />
          <RaisedButton label="Save" primary disabled={submitting} onClick={this.submit} />
        </CardActions>
      </Card>
    );
  }
}

const validate = (values) => {
  const errors = {};
  if (!values.title) {
    errors.title = 'Required';
  }
  if (!values.body) {
    errors.body = 'Required';
  }

  return errors;
};

export default reduxForm({
  form: 'addUsecaseForm',
  validate,
  onSubmitSuccess: (result, dispatch) => dispatch(reset('addUsecaseForm'))
})(AddUsecaseForm);
