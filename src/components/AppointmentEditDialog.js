import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default class AppointmentEditDialog extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        open: false,
        name: '',
        phone: '',
        available: false
      };
    }

    componentDidMount() {
      this.setState({
        name: this.props.selectedAppointment.name ? this.props.selectedAppointment.name : '',
        phone: this.props.selectedAppointment.phone ? this.props.selectedAppointment.phone : '',
        available: this.props.selectedAppointment.available ? this.props.selectedAppointment.available : true,
      });
    }

    componentWillReceiveProps() {
      this.setState({
        name: this.props.selectedAppointment.name ? this.props.selectedAppointment.name : '',
        phone: this.props.selectedAppointment.phone ? this.props.selectedAppointment.phone : '',
        available: this.props.selectedAppointment.available ? this.props.selectedAppointment.available : true,
      });
    }

  // handleClickOpen = () => {
  //   this.setState({ open: true });
  // };

  // handleClose = () => {
  //   this.setState({ open: false });
  // };

  _handleNameChange = (e) => {
    this.setState({
      name: e.target.value
    });
  }

  _handlePhoneChange = (e) => {
    this.setState({
      phone: e.target.value
    });
  }

  render() {
    let time = this.props.selectedAppointment.time ? this.props.selectedAppointment.time : '';
    let name = this.props.selectedAppointment.name ? this.props.selectedAppointment.name : '';
    let phone = this.props.selectedAppointment.phone ? this.props.selectedAppointment.phone : '';
    let isEnabled = (name !== '' && phone !== '') || (name === '' && phone === '');

    return (
      <div>
        <Dialog
          open={this.props.open}
          onClose={this.props.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Appointment Information</DialogTitle>
          <DialogContent>
            <DialogContentText>
              {time}
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Name"
              type="text"
              fullWidth
              value={name}
              onChange={this.props.handleNameChange}
            />
            <TextField
              margin="dense"
              id="phone"
              label="Phone Number"
              type="tel"
              fullWidth
              value={phone}
              onChange={this.props.handlePhoneChange}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.props.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.props.handleSave} color="primary" disabled={!isEnabled}>
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}