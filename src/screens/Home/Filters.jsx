import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import 'date-fns';
import { Button } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { blue } from '@material-ui/core/colors';
import Card from '@material-ui/core/Card';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 220,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginTop: theme.spacing(1),
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 220,
    },
    button:{
        minWidth: 220,
        marginTop: theme.spacing(4),
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    title:{
        marginTop: theme.spacing(1),
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        color: blue,
        fontSize: "14px"
    },
    card:{
        width: 250,
        height: 450,
        // paddingLeft: "20px"
        padding: "20px",

    }
}));

export function Filters() {
    const classes = useStyles();
    const [genres, setGenres] = React.useState('');
    const [artists, setArtists] = React.useState('');

    const handleChangeGenres = (event) => {
        setGenres(event.target.value);
    };

    const handleChangeArtists = (event) => {
        setArtists(event.target.value);
    };



    return (
        <div>
            <Card className={classes.card} variant="outlined">
            <Typography className={classes.title} color="primary" gutterBottom>
          FIND MOVIES BY:
        </Typography>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField id="standard-basic" label="Movie Name" />
            </form>
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-helper-label">Genres</InputLabel>
                <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={genres}
                    onChange={handleChangeGenres}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={1}>one</MenuItem>
                    <MenuItem value={2}>two</MenuItem>
                    <MenuItem value={3}>three</MenuItem>
                </Select>

            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-helper-label">Artists</InputLabel>
                <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={artists}
                    onChange={handleChangeArtists}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={1}>one</MenuItem>
                    <MenuItem value={2}>two</MenuItem>
                    <MenuItem value={3}>three</MenuItem>
                </Select>

            </FormControl>
            <form className={classes.container} noValidate>
                <TextField
                    id="date"
                    label="Release Date Start"
                    type="date"
                    defaultValue="dd-mm-yyyy"
                    className={classes.textField}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />

                <TextField
                    id="date"
                    label="Release Date End"
                    type="date"
                    defaultValue="dd-mm-yyyy"
                    className={classes.textField}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </form>
            <Button className={classes.button} variant="contained" color="primary" >
                Apply
            </Button>
            </Card>
        </div>
    );
}
