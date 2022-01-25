import {
    Container,
    FormControl,
    FormControlLabel,
    FormLabel,
    Grid, InputLabel,
    Radio,
    RadioGroup,
    TextField,
    Checkbox,
    Box,
    Typography,
    Button
} from "@mui/material";
import React, { useState, useEffect, useContext } from "react";
import { styled } from '@mui/system'

import Api from '../../../../../utils/api'
import { DispatchContext } from "../../../../../store";
import { Copyright, ModalSurveyStatus } from '../../../../../components'

const Root = styled(Container)({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
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
export default function GutSurvey({ arr, id }) {
    const [bowelСancer, setBowelСancer] = useState(null);
    const [diarrhea, setDiarrhea] = useState(null);
    const [excreta, setExcreta] = useState(null);
    const [slime, setSlime] = useState(null);
    const [weight, setWeight] = useState(null);
    const [discomfort, setDiscomfort] = useState(null);
    const [chronic, setChronic] = useState(null);
    const [colonoscopy, setColonoscopy] = useState(null);
    const [colon, setColon] = useState(null);
    const [textField, setTextField] = useState(null)
    const [textResult, setTextResult] = useState(null)
    const [temperature, setTemperature] = useState(null);
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

    let calculateOnkom = () => {
        if (colonoscopy == 0 || 3) {
            return 0;
        }
        else {
            setTextResult(new Date().getFullYear().valueOf() - textField)
            return textResult > 1 ? 2 : 0
        }
    }
    useEffect(() => {
        calculateOnkom()
    }, [textField])

    const handlerPost = async () => {
        let scoreInc = (answer) => {
            if (answer > 0) {
                return "Да"
            } else {
                return "Нет"
            }
        }
        let scoreColon = (answer) => {
            switch (answer) {
                case "1":
                    return "Был полип";
                    break;
                case "0":
                    return "Норма";
                    break;
                case "2":
                    return "Была аденома";
                    break;
                case "3":
                    return "Не проходил";
            }
        }

        Api.sendSurveys({
            survey_type: id,
            fields: [
                {
                    text: arr[0],
                    answer: scoreInc(bowelСancer),
                    score: bowelСancer
                },
                {
                    text: arr[1],
                    answer: scoreInc(diarrhea),
                    score: diarrhea
                },
                {
                    text: arr[2],
                    answer: scoreInc(excreta),
                    score: excreta
                },
                {
                    text: arr[3],
                    answer: scoreInc(slime),
                    score: slime
                },
                {
                    text: arr[4],
                    answer: scoreInc(weight),
                    score: weight
                },
                {
                    text: arr[5],
                    answer: scoreInc(discomfort),
                    score: discomfort
                },
                {
                    text: arr[6],
                    answer: scoreInc(chronic),
                    score: chronic
                },
                {
                    text: arr[8],
                    answer: scoreColon(colonoscopy),
                    score: calculateOnkom()
                },
                {
                    text: arr[7],
                    answer: scoreInc(colon),
                    score: colon
                },
                {
                    text: arr[9],
                    answer: scoreInc(temperature),
                    score: 0
                },
            ]
        }, dispatch)
    };

    return (
        <Root component="main" maxWidth="md">
            <ModalSurveyStatus />
            <Typography component="h1" variant="h5"
                style={{ display: 'flex', justifyContent: "center", alignItems: "center", padding: 20 }}>
                Суон уонна көнө оһоҕос ыарыыларын тургутуу
            </Typography>
            {/* {show && <ModalTrue />}
            {showFalse && <ModalFalse />}
            {showMiddle && <ModalMiddle />} */}
            <Grid container spacing={6}>
                <Grid item xs={12} sm={12}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">1. {arr[0]}</FormLabel>
                        <RadioGroup aria-label="gender" name="gender1" value={bowelСancer} onChange={(e) => {
                            setBowelСancer(e.target.value)
                        }} style={{ display: 'flex', flexDirection: 'row' }}>
                            <FormControlLabel checked={bowelСancer == 3} value={3} control={<Radio />} label="Баара" />
                            <FormControlLabel checked={bowelСancer == 0} value={0} control={<Radio />} label="Суоҕа" />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={12}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">2. {arr[1]}</FormLabel>
                        <RadioGroup aria-label="gender" name="gender1" value={diarrhea} onChange={(e) => {
                            setDiarrhea(e.target.value)
                        }} style={{ display: 'flex', flexDirection: 'row' }}>
                            <FormControlLabel checked={diarrhea == 1} value={1} control={<Radio />} label="Баара" />
                            <FormControlLabel checked={diarrhea == 0} value={0} control={<Radio />} label="Суоҕа" />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={12}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend"> 3. {arr[2]}</FormLabel>
                        <RadioGroup aria-label="gender" name="gender1" value={excreta} onChange={(e) => {
                            setExcreta(e.target.value)
                        }} style={{ display: 'flex', flexDirection: 'row' }}>
                            <FormControlLabel checked={excreta == 2} value={2} control={<Radio />} label="Баара" />
                            <FormControlLabel checked={excreta == 0} value={0} control={<Radio />} label="Суоҕа" />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={12}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">4. {arr[3]}</FormLabel>
                        <RadioGroup aria-label="gender" name="gender1" value={slime} onChange={(e) => {
                            setSlime(e.target.value)
                        }} style={{ display: 'flex', flexDirection: 'row' }}>
                            <FormControlLabel checked={slime == 1} value={1} control={<Radio />} label="Баара" />
                            <FormControlLabel checked={slime == 0} value={0} control={<Radio />} label="Суоҕа" />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={12}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">5. {arr[4]}</FormLabel>
                        <RadioGroup aria-label="gender" name="gender1" value={weight} onChange={(e) => {
                            setWeight(e.target.value)
                        }} style={{ display: 'flex', flexDirection: 'row' }}>
                            <FormControlLabel checked={weight == 2} value={2} control={<Radio />} label="Баара" />
                            <FormControlLabel checked={weight == 0} value={0} control={<Radio />} label="Суоҕа" />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={12}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">6. {arr[5]}</FormLabel>
                        <RadioGroup aria-label="gender" name="gender1" value={discomfort} onChange={(e) => {
                            setDiscomfort(e.target.value)
                        }} style={{ display: 'flex', flexDirection: 'row' }}>
                            <FormControlLabel checked={discomfort == 2} value={2} control={<Radio />} label="Баара" />
                            <FormControlLabel checked={discomfort == 0} value={0} control={<Radio />} label="Суоҕа" />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={12}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">7. {arr[6]}</FormLabel>
                        <RadioGroup aria-label="gender" name="gender1" value={chronic} onChange={(e) => {
                            setChronic(e.target.value)
                        }} style={{ display: 'flex', flexDirection: 'row' }}>
                            <FormControlLabel checked={chronic == 10} value={10} control={<Radio />} label="Баара" />
                            <FormControlLabel checked={chronic == 0} value={0} control={<Radio />} label="Суоҕа" />

                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={12}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">8. {arr[8]}</FormLabel>
                        <TextField id={"outlined-basic"} label={"Күнэ-дьыла"} type={"number"}
                            required
                            fullWidth
                            variant={"outlined"}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={(e) => {
                                setTextField(e.target.value)
                                console.log(e.target.value)
                            }}
                            value={textField}
                            style={{ marginTop: 20 }}
                        />
                        <RadioGroup aria-label="gender" name="gender1" value={colonoscopy} onChange={(e) => {
                            setColonoscopy(e.target.value)
                        }} style={{ display: 'flex', flexDirection: 'row' }}>
                            <FormControlLabel checked={colonoscopy == 0} value={0} control={<Radio />} label="Этэҥҥэ" />
                            <FormControlLabel checked={colonoscopy == 3} value={3} control={<Radio />} label="Ааспатаҕым" />
                            <FormControlLabel checked={colonoscopy == 1} value={1} control={<Radio />} label="Полип баара" />
                            <FormControlLabel checked={colonoscopy == 2} value={2} control={<Radio />} label="Аденома баара" />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={12}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">9. {arr[7]}</FormLabel>
                        <RadioGroup aria-label="gender" name="gender1" value={colon} onChange={(e) => {
                            setColon(e.target.value)
                        }} style={{ display: 'flex', flexDirection: 'row' }}>
                            <FormControlLabel checked={colon == 1} value={1} control={<Radio />} label="Баара" />
                            <FormControlLabel checked={colon == 0} value={0} control={<Radio />} label="Суоҕа" />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={12}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">10. {arr[9]}</FormLabel>
                        <RadioGroup aria-label="gender" name="gender1" value={temperature} onChange={(e) => {
                            setTemperature(e.target.value)
                        }} style={{ display: 'flex', flexDirection: 'row' }}>

                            <FormControlLabel checked={temperature == 1} value={1} control={<Radio />} label="Баара" />
                            <FormControlLabel checked={temperature == 0} value={0} control={<Radio />} label="Суоҕа" />

                        </RadioGroup>
                    </FormControl>
                </Grid>
                <FormStyle item xs={12}>
                    <FormControlLabel
                        control={<Checkbox value="allowRules" color="primary" checked={checked}
                            onChange={soldCheckbox} />}
                        label={''}
                    />
                    <LinkStyle color='primary' href={'/IDS.doc'} target={'_blank'}>Тэрили өйдөөн хааларга</LinkStyle>
                </FormStyle>
                <Button style={{ marginTop: 20 }}
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={handlerPost}
                    disabled={!isActiveButton}
                >
                    Сохранить
                </Button>
            </Grid>
            <Box mt={5}>
                <Copyright />
            </Box>
        </Root>

    );
};