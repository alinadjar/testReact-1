
import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';


import Slider from '@material-ui/core/Slider';
import Switch from '@material-ui/core/Switch';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        padding: '60px',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
    dense: {
        marginTop: 19,
    },
    menu: {
        width: 200,
    },

    root: {
        width: 300,
      },
      margin: {
        height: theme.spacing(3),
      },
}));

const currencies = [
    {
        value: 'USD',
        label: '$',
    },
    {
        value: 'EUR',
        label: '€',
    },
    {
        value: 'BTC',
        label: '฿',
    },
    {
        value: 'JPY',
        label: '¥',
    },
];




const marks = [
    {
      value: 0,
      label: '0°C',
    },
    {
      value: 20,
      label: '20°C',
    },
    {
      value: 37,
      label: '37°C',
    },
    {
      value: 100,
      label: '100°C',
    },
  ];
  
  function valuetext(value) {
    return `${value}°C`;
  }
  
  function valueLabelFormat(value) {
    return marks.findIndex(mark => mark.value === value) + 1;
  }






export default function TextFields() {
    const classes = useStyles();
    const [values, setValues] = React.useState({
        name: 'Cat in the Hat',
        age: '',
        multiline: 'Controlled',
        currency: 'EUR',
    });

    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
    });

    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
    };

    const handleChangeSwitch = name => event => {
        setState({ ...state, [name]: event.target.checked });
    };

    return (
        <div>
            <div>
                <Switch
                    checked={state.checkedA}
                    onChange={handleChangeSwitch('checkedA')}
                    value="checkedA"
                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
                <Switch
                    checked={state.checkedB}
                    onChange={handleChangeSwitch('checkedB')}
                    value="checkedB"
                    color="primary"
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                />
                <Switch value="checkedC" inputProps={{ 'aria-label': 'primary checkbox' }} />
                <Switch disabled value="checkedD" inputProps={{ 'aria-label': 'disabled checkbox' }} />
                <Switch disabled checked value="checkedE" inputProps={{ 'aria-label': 'primary checkbox' }} />
            </div>
            <form className={classes.container} noValidate autoComplete="off">
                <TextField
                    id="standard-name"
                    label="Name"
                    className={classes.textField}
                    value={values.name}
                    onChange={handleChange('name')}
                    margin="normal"
                />
                <TextField
                    id="standard-uncontrolled"
                    label="Uncontrolled"
                    defaultValue="foo"
                    className={classes.textField}
                    margin="normal"
                />
                <TextField
                    required
                    id="standard-required"
                    label="Required"
                    defaultValue="Hello World"
                    className={classes.textField}
                    margin="normal"
                />
                <TextField
                    error
                    id="standard-error"
                    label="Error"
                    defaultValue="Hello World"
                    className={classes.textField}
                    margin="normal"
                />
                <TextField
                    disabled
                    id="standard-disabled"
                    label="Disabled"
                    defaultValue="Hello World"
                    className={classes.textField}
                    margin="normal"
                />
                <TextField
                    id="standard-password-input"
                    label="Password"
                    className={classes.textField}
                    type="password"
                    autoComplete="current-password"
                    margin="normal"
                />
                <TextField
                    id="standard-read-only-input"
                    label="Read Only"
                    defaultValue="Hello World"
                    className={classes.textField}
                    margin="normal"
                    InputProps={{
                        readOnly: true,
                    }}
                />
                <TextField
                    id="standard-dense"
                    label="Dense"
                    className={clsx(classes.textField, classes.dense)}
                    margin="dense"
                />
                <TextField
                    id="standard-multiline-flexible"
                    label="Multiline"
                    multiline
                    rowsMax="4"
                    value={values.multiline}
                    onChange={handleChange('multiline')}
                    className={classes.textField}
                    margin="normal"
                />
                <TextField
                    id="standard-multiline-static"
                    label="Multiline"
                    multiline
                    rows="4"
                    defaultValue="Default Value"
                    className={classes.textField}
                    margin="normal"
                />
                <TextField
                    id="standard-helperText"
                    label="Helper text"
                    defaultValue="Default Value"
                    className={classes.textField}
                    helperText="Some important text"
                    margin="normal"
                />
                <TextField
                    id="standard-with-placeholder"
                    label="With placeholder"
                    placeholder="Placeholder"
                    className={classes.textField}
                    margin="normal"
                />
                <TextField
                    id="standard-textarea"
                    label="With placeholder multiline"
                    placeholder="Placeholder"
                    multiline
                    className={classes.textField}
                    margin="normal"
                />
                <TextField
                    id="standard-number"
                    label="Number"
                    value={values.age}
                    onChange={handleChange('age')}
                    type="number"
                    className={classes.textField}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    margin="normal"
                />
                <TextField
                    id="standard-search"
                    label="Search field"
                    type="search"
                    className={classes.textField}
                    margin="normal"
                />
                <TextField
                    id="standard-select-currency"
                    select
                    label="Select"
                    className={classes.textField}
                    value={values.currency}
                    onChange={handleChange('currency')}
                    SelectProps={{
                        MenuProps: {
                            className: classes.menu,
                        },
                    }}
                    helperText="Please select your currency"
                    margin="normal"
                >
                    {currencies.map(option => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField
                    id="standard-select-currency-native"
                    select
                    label="Native select"
                    className={classes.textField}
                    value={values.currency}
                    onChange={handleChange('currency')}
                    SelectProps={{
                        native: true,
                        MenuProps: {
                            className: classes.menu,
                        },
                    }}
                    helperText="Please select your currency"
                    margin="normal"
                >
                    {currencies.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </TextField>
                <TextField
                    id="standard-full-width"
                    label="Label"
                    style={{ margin: 8 }}
                    placeholder="Placeholder"
                    helperText="Full width!"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    id="standard-bare"
                    className={classes.textField}
                    defaultValue="Bare"
                    margin="normal"
                    inputProps={{ 'aria-label': 'bare' }}
                />
            </form>
            <form className={classes.container} noValidate autoComplete="off">
                <TextField
                    id="outlined-name"
                    label="Name"
                    className={classes.textField}
                    value={values.name}
                    onChange={handleChange('name')}
                    margin="normal"
                    variant="outlined"
                />
                <TextField
                    id="outlined-uncontrolled"
                    label="Uncontrolled"
                    defaultValue="foo"
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                />
                <TextField
                    required
                    id="outlined-required"
                    label="Required"
                    defaultValue="Hello World"
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                />
                <TextField
                    error
                    id="outlined-error"
                    label="Error"
                    defaultValue="Hello World"
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                />
                <TextField
                    disabled
                    id="outlined-disabled"
                    label="Disabled"
                    defaultValue="Hello World"
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                />
                <TextField
                    id="outlined-email-input"
                    label="Email"
                    className={classes.textField}
                    type="email"
                    name="email"
                    autoComplete="email"
                    margin="normal"
                    variant="outlined"
                />
                <TextField
                    id="outlined-password-input"
                    label="Password"
                    className={classes.textField}
                    type="password"
                    autoComplete="current-password"
                    margin="normal"
                    variant="outlined"
                />
                <TextField
                    id="outlined-read-only-input"
                    label="Read Only"
                    defaultValue="Hello World"
                    className={classes.textField}
                    margin="normal"
                    InputProps={{
                        readOnly: true,
                    }}
                    variant="outlined"
                />
                <TextField
                    id="outlined-dense"
                    label="Dense"
                    className={clsx(classes.textField, classes.dense)}
                    margin="dense"
                    variant="outlined"
                />
                <TextField
                    id="outlined-dense-multiline"
                    label="Dense multiline"
                    className={clsx(classes.textField, classes.dense)}
                    margin="dense"
                    variant="outlined"
                    multiline
                    rowsMax="4"
                />
                <TextField
                    id="outlined-multiline-flexible"
                    label="Multiline"
                    multiline
                    rowsMax="4"
                    value={values.multiline}
                    onChange={handleChange('multiline')}
                    className={classes.textField}
                    margin="normal"
                    helperText="hello"
                    variant="outlined"
                />
                <TextField
                    id="outlined-multiline-static"
                    label="Multiline"
                    multiline
                    rows="4"
                    defaultValue="Default Value"
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                />
                <TextField
                    id="outlined-helperText"
                    label="Helper text"
                    defaultValue="Default Value"
                    className={classes.textField}
                    helperText="Some important text"
                    margin="normal"
                    variant="outlined"
                />
                <TextField
                    id="outlined-with-placeholder"
                    label="With placeholder"
                    placeholder="Placeholder"
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                />
                <TextField
                    id="outlined-textarea"
                    label="Multiline Placeholder"
                    placeholder="Placeholder"
                    multiline
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                />
                <TextField
                    id="outlined-number"
                    label="Number"
                    value={values.age}
                    onChange={handleChange('age')}
                    type="number"
                    className={classes.textField}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    margin="normal"
                    variant="outlined"
                />
                <TextField
                    id="outlined-search"
                    label="Search field"
                    type="search"
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                />
                <TextField
                    id="outlined-select-currency"
                    select
                    label="Select"
                    className={classes.textField}
                    value={values.currency}
                    onChange={handleChange('currency')}
                    SelectProps={{
                        MenuProps: {
                            className: classes.menu,
                        },
                    }}
                    helperText="Please select your currency"
                    margin="normal"
                    variant="outlined"
                >
                    {currencies.map(option => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField
                    id="outlined-select-currency-native"
                    select
                    label="Native select"
                    className={classes.textField}
                    value={values.currency}
                    onChange={handleChange('currency')}
                    SelectProps={{
                        native: true,
                        MenuProps: {
                            className: classes.menu,
                        },
                    }}
                    helperText="Please select your currency"
                    margin="normal"
                    variant="outlined"
                >
                    {currencies.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </TextField>
                <TextField
                    id="outlined-full-width"
                    label="Label"
                    style={{ margin: 8 }}
                    placeholder="Placeholder"
                    helperText="Full width!"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    id="outlined-bare"
                    className={classes.textField}
                    defaultValue="Bare"
                    margin="normal"
                    variant="outlined"
                    inputProps={{ 'aria-label': 'bare' }}
                />
            </form>


            <div className={classes.root}>
      <Typography id="discrete-slider" gutterBottom>
        Temperature
      </Typography>
      <Slider
        defaultValue={30}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={10}
        marks
        min={10}
        max={110}
      />
      <div className={classes.margin} />
      <Typography id="discrete-slider-small-steps" gutterBottom>
        Small steps
      </Typography>
      <Slider
        defaultValue={0.00000005}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-small-steps"
        step={0.00000001}
        marks
        min={-0.00000005}
        max={0.0000001}
        valueLabelDisplay="auto"
      />
      <div className={classes.margin} />
      <Typography id="discrete-slider-custom" gutterBottom>
        Custom marks
      </Typography>
      <Slider
        defaultValue={20}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-custom"
        step={10}
        valueLabelDisplay="auto"
        marks={marks}
      />
      <div className={classes.margin} />
      <Typography id="discrete-slider-restrict" gutterBottom>
        Restricted values
      </Typography>
      <Slider
        defaultValue={20}
        valueLabelFormat={valueLabelFormat}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-restrict"
        step={null}
        valueLabelDisplay="auto"
        marks={marks}
      />
      <div className={classes.margin} />
      <Typography id="discrete-slider-always" gutterBottom>
        Always visible
      </Typography>
      <Slider
        defaultValue={80}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-always"
        step={10}
        marks={marks}
        valueLabelDisplay="on"
      />
    </div>
        </div>
    );
}

