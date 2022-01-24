import React, { useState, useEffect, useContext } from "react";
import axios from 'axios';
import { styled } from '@mui/system'
import {
    Button,
    Box,
    Typography,
    Container,
    FormControl,
    FormControlLabel,
    FormLabel,
    Grid,
    InputLabel,
    Radio,
    RadioGroup,
    TextField,
    Checkbox
} from '@mui/material'

import Api from '../../../../../utils/api'
import { DispatchContext } from "../../../../../store";

const Root = styled(Container)({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
})

const FormStyle = styled(Grid)({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
})

const LinkStyle = styled('a')({
    textDecoration: 'underline',
    '&:hover': {
        cursor: 'pointer'
    }
})

export default function BreathSurvey({ arr, id }) {
    const [smoke, setSmoke] = useState(null);
    const [smokeAge, setSmokeAge] = useState(null);
    const [smokeBundles, setSmokeBundles] = useState(null);
    const [tomography, setTomography] = useState(null);
    const [blood, setBlood] = useState(null);
    const [weigh, setWeigh] = useState(null);
    const [access, setAccess] = useState(null);
    const [temperature, setTemperature] = useState(null);
    const [smokeResult, setSmokeResult] = useState(0)
    const [show, setShow] = useState(false)
    const [showFalse, setShowFalse] = useState(false)
    const [showMiddle, setShowMiddle] = useState(false)
    const [district, setDistrict] = useState(1)
    const [checked, setChecked] = useState(false)
    const [isActiveButton, setActiveButton] = useState(false)
    const dispatch = useContext(DispatchContext)

    const checkFormValid = () => {
        checked ? setActiveButton(true) : setActiveButton(false)
    }
    useEffect(checkFormValid, [checked])
    const soldCheckbox = ({ target: { checked } }) => {
        setChecked(checked);
    };

    const calculateSmoke = () => {
        if (!smokeAge || !smokeBundles) {
            return 1
        } else {
            setSmokeResult(smokeAge * smokeBundles / 20)
            return smokeResult > 10 ? 2 : 0
        }
    }

    useEffect(() => {
        console.log(smoke)
        calculateSmoke()
    }, [smokeAge, smokeBundles])

    const handlerPost = async () => {
        let scoreInc = (answer) => {
            if (answer > 0) {
                return "Да"
            } else {
                return "Нет"
            }
        }
        Api.sendSurveys({
            survey_type: id,
            fields: [
                {
                    text: arr[0],
                    answer: smokeResult,
                    score: calculateSmoke()
                },
                {
                    text: arr[1],
                    answer: scoreInc(tomography),
                    score: tomography,
                },
                {
                    text: arr[2],
                    answer: scoreInc(blood),
                    score: blood
                },
                {
                    text: arr[3],
                    answer: scoreInc(weigh),
                    score: weigh
                },
                {
                    text: arr[4],
                    answer: scoreInc(access),
                    score: access
                },
                {
                    text: arr[5],
                    answer: scoreInc(temperature),
                    score: 0
                },
            ]
        }, dispatch)
        // .then((res) => {
        //     if (res.status == 200) {
        //         console.log("result", res);
        //         const danger = res.data.is_danger
        //         const clinic = res.data.to_clinic
        //         if (danger == true && clinic == false) {
        //             setShow(true)
        //         }
        //         if (danger == false && clinic == false) {
        //             setShowFalse(true)
        //         }
        //         if (clinic == true) {
        //             setShowMiddle(true)
        //         }
        //     }
        // })
    };
    return (
        <Root component="main" maxWidth="md">
            <Typography component="h1" variant="h5"
                style={{ display: 'flex', justifyContent: "center", alignItems: "center", padding: 20 }}>
                Тыҥа ыарыыларын тургутуу
            </Typography>
            {/* {show && <ModalTrue />}
            {showFalse && <ModalFalse />}
            {showMiddle && <ModalMiddle />} */}
            <Grid container spacing={6}>
                <Grid item xs={12} sm={12}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">1. {arr[0]}</FormLabel>
                        <Grid item xs={12} sm={12}>
                            <TextField id={"outlined-basic"} type="number" placeholder="Табах күҥҥэ "
                                variant={"outlined"} value={smokeBundles}
                                onChange={(e) => {
                                    setSmokeBundles(e.target.value)
                                    console.log(e.target.value, 'count')
                                }} style={{ marginLeft: 10, }} />
                            <TextField id={"outlined-basic"} type="number" placeholder="Сааһын"
                                variant={"outlined"} value={smokeAge}
                                onChange={(e) => {
                                    setSmokeAge(e.target.value)
                                    console.log(e.target.value, 'ages')
                                }} style={{ marginLeft: 10, }} />
                            <TextField id={"outlined-basic"} type="number" variant={"outlined"} aria-readonly={true}
                                value={smokeResult}
                                style={{ marginLeft: 10 }} />
                            <RadioGroup onChange={() => {
                                setSmokeResult(0)
                            }}>
                                <FormControlLabel checked={smokeResult == 0} value={0} control={<Radio />}
                                    label="Табахтаабаппын"
                                    style={{ marginLeft: 10, marginTop: 5 }} />
                            </RadioGroup>
                        </Grid>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={12}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">2. {arr[1]}</FormLabel>
                        <RadioGroup value={tomography} onChange={(e) => {
                            setTomography(e.target.value)
                            console.log(e.target.value)
                        }} style={{ display: 'flex', flexDirection: 'row' }}>
                            <FormControlLabel checked={tomography == 1} value={1} control={<Radio />} label="Ааһан" />
                            <FormControlLabel checked={tomography == 0} value={0} control={<Radio />} label="Суох " />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={12}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">3. {arr[2]}</FormLabel>
                        <RadioGroup aria-label="gender" name="gender1" value={blood} onChange={(e) => {
                            setBlood(e.target.value)
                            console.log(e.target.value)
                        }} style={{ display: 'flex', flexDirection: 'row' }}>
                            <FormControlLabel checked={blood == 1} value={1} control={<Radio />} label="Силлээн" />
                            <FormControlLabel checked={blood == 0} value={0} control={<Radio />} label="Суох" />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={12}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">4. {arr[3]}
                        </FormLabel>
                        <RadioGroup aria-label="gender" name="gender1" value={weigh} onChange={(e) => {
                            setWeigh(e.target.value)
                            console.log(e.target.value)
                        }} style={{ display: 'flex', flexDirection: 'row' }}>
                            <FormControlLabel checked={weigh == 1} value={1} control={<Radio />} label="Оннук баар этэ" />
                            <FormControlLabel checked={weigh == 10} value={10} control={<Radio />} label="Суох" />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={12}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">5. {arr[4]}</FormLabel>
                        <RadioGroup aria-label="gender" name="gender1" value={access} onChange={(e) => {
                            setAccess(e.target.value)
                            console.log(e.target.value)
                        }} style={{ display: 'flex', flexDirection: 'row' }}>
                            <FormControlLabel checked={access == 10} value={10} control={<Radio />} label="Баар" />
                            <FormControlLabel checked={access == 1} value={1} control={<Radio />} label="Суох" />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={12}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">6. {arr[5]}</FormLabel>
                        <RadioGroup aria-label="gender" name="gender1" value={temperature} onChange={(e) => {
                            setTemperature(e.target.value)
                            console.log(e.target.value)
                        }} style={{ display: 'flex', flexDirection: 'row' }}>
                            <FormControlLabel checked={temperature == 1} value={1} control={<Radio />} label="Тахсан" />
                            <FormControlLabel checked={temperature == 0} value={0} control={<Radio />} label="Суох" />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <FormStyle item xs={12}>
                    <FormControlLabel
                        control={<Checkbox value="allowRules" color="primary" checked={checked}
                            onChange={soldCheckbox} />}
                        label={''}
                    />
                    <LinkStyle color='primary' href={'/IDS.doc'} target={'_blank'}>Согласие на
                        обработку перснальных данных</LinkStyle>
                </FormStyle>
                <Button style={{ marginTop: 20 }}
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={handlerPost}
                    disabled={!isActiveButton}
                >
                    ЫЫТАРГА
                </Button>
            </Grid>
            {/* <Box mt={5}>
                <Copyright />
            </Box> */}
        </Root>
    );
};