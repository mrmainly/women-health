import {
    Container,
    FormControl,
    FormControlLabel,
    FormLabel,
    Grid,
    Radio,
    RadioGroup,
    TextField,
    Checkbox,
    Typography,
    Box,
    Button
} from "@mui/material";
import React, { useState, useEffect, useContext } from "react";
import { styled } from '@mui/system'
import { Copyright, ModalSurveyStatus } from '../../../../../components'
import Api from '../../../../../utils/api'
import cookie from 'js-cookie'
import { DispatchContext } from "../../../../../store";
import { FormattedMessage } from "react-intl";

const Root = styled(Container)({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
})

const Avatar = styled(Box)((theme) => ({
    margin: 20,
    backgroundColor: theme.palette.secondary.main,
}))

const Form = styled(Box)((theme) => ({
    width: '100%',
    marginTop: 30
}))

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

const BreastSurvey = ({ arr, id }) => {
    const [accessFamily, setAccessFamily] = useState(null);
    const [touching, setTouching] = useState(null);
    const [lemon, setLemon] = useState(null);
    const [excreta, setExcreta] = useState(null);
    const [changes, setChanges] = useState(null);
    const [mammography, setMammography] = useState(null);
    const [mammoResult, setMammoResult] = useState(null)
    const [accessMalignant, setAccessMalignant] = useState(null);
    const [menstruation, setMenstruation] = useState("");
    const [childBirth, setChildBirth] = useState(null);
    const [temperature, setTemperature] = useState(null);
    const [show, setShow] = useState(false)
    const [showFalse, setShowFalse] = useState(false)
    const [showMiddle, setShowMiddle] = useState(false)
    const [district, setDistrict] = useState(1)
    const [checked, setChecked] = useState(false)
    const [isActiveButton, setActiveButton] = useState(false)
    const dispatch = useContext(DispatchContext)
    const date = cookie.get('date')
    const checkFormValid = () => {
        checked ? setActiveButton(true) : setActiveButton(false)
    }
    useEffect(checkFormValid, [checked])
    const soldCheckbox = ({ target: { checked } }) => {
        setChecked(checked);
    };
    let calculateMammography = () => {
        if (mammography == 0) {
            return 0;
        }
        if (mammography == 1) {
            setMammoResult(new Date().getFullYear().valueOf() - date)
            return mammoResult > 49 ? 2 : 0
        }
        if (mammography == 3) {
            return 3
        }
    }

    const handlerPost = async () => {
        let scoreInc = (answer) => {
            if (answer > 0) {
                return "????"
            } else {
                return "??????"
            }
        }
        let scoreMammograpgy = (answer) => {
            switch (answer) {
                case "1":
                    return "???????????? ?? ?????????????? ????????";
                    break;
                case "3":
                    return "?????????????? ???? ??????????????????";
                    break;
                case "0":
                    return "???????????? ?? ???????? ????????";
            }
        }
        Api.sendSurveys({
            survey_type: id,
            fields: [
                {
                    text: '???????? ???? ?????????? ?????????? ?????????????????????????? (????????/ ????????; ??????????????/??????????????; ????????????/ ????????) ???????????? ?????????????????????? ?????????? ???????????????? ????????????, ?????????? ?????????????? ??????????, ?????????? ?????????? ?? ????????????????',
                    answer: scoreInc(accessFamily),
                    score: accessFamily
                },
                {
                    text: '?????? ?????????????????? ???????????????? ???????????? ?????????????????????? ???? ???? ?????????? ???? ???????? ???????????????????????',
                    answer: scoreInc(touching),
                    score: touching
                },
                {
                    text: '?????????????? ???? ???? ???? ???????????????? ???????????? ?????????????? ???????? ???????????????????????? ?????????????????? ?????????????',
                    answer: scoreInc(lemon),
                    score: lemon
                },
                {
                    text: '?????????????? ???? ???? ?????????????????? ???? ???????????',
                    answer: scoreInc(excreta),
                    score: excreta
                },
                {
                    text: '???? ???????????????? ???? ???? ?????????????????? ?????????? (????????????????)?',
                    answer: scoreInc(changes),
                    score: changes
                },
                {
                    text: '?????????? ???? ?????????????????? ?????????????????? ?????? ???????????????????????',
                    answer: scoreMammograpgy(mammography),
                    score: calculateMammography()
                },
                {
                    text: '?????????????? ???? ?? ?????? ???????????????????????????? ?????????????????????????????? ???????????????????????????????',
                    answer: scoreInc(accessMalignant),
                    score: accessMalignant
                },
                {
                    text: '?????????????? ?????????????? ???????????? ??????????????????????',
                    answer: menstruation,
                    score: 0
                },
                {
                    text: '???????? ???? ?? ?????? ???????? ?',
                    answer: scoreInc(childBirth),
                    score: 0
                },
                {
                    text: '?????????????????? 10 ???????? ???????? ???? ?? ?????? ?????????????? ?????????????????? ?????????????????????? ???????? ???????? 37,5*??.',
                    answer: scoreInc(temperature),
                    score: 0
                }
            ]
        }, dispatch)
        // .then((res) => {
        //     if (res.status == 200) {
        //      
        //     }
        // }
    }
    return (
        <Root component="main" maxWidth="md">
            <ModalSurveyStatus />
            <Typography component="h1" variant="h5"
                style={{ display: 'flex', justifyContent: "center", alignItems: "center", padding: 20 }}>
                <FormattedMessage id="name_breast_survey" />
            </Typography>
            <Box style={{ width: '100%' }}>
                <Grid container spacing={6}>
                    <Grid item xs={12} sm={12}>
                        <FormControl component="fieldset">
                            <FormLabel component="legend">1. <FormattedMessage id="cases_cancer_breast_survey" /></FormLabel>
                            <RadioGroup value={accessFamily} onChange={(e) => {
                                setAccessFamily(e.target.value)
                            }} style={{ display: 'flex', flexDirection: 'row' }}>
                                <FormControlLabel checked={accessFamily == 3} value={3} control={<Radio />} label={<FormattedMessage id="answer1_yes_breast_survey" />} />
                                <FormControlLabel checked={accessFamily == 0} value={0} control={<Radio />} label={<FormattedMessage id="answer1_no_breast_survey" />} />
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <FormControl component="fieldset">
                            <FormLabel component="legend">2. <FormattedMessage id="determine_formation_breast_survey" /></FormLabel>
                            <RadioGroup value={touching} onChange={(e) => {
                                setTouching(e.target.value)
                            }} style={{ display: 'flex', flexDirection: 'row' }}>
                                <FormControlLabel checked={touching == 1} value={1} control={<Radio />} label={<FormattedMessage id="answer2_yes_breast_survey" />} />
                                <FormControlLabel checked={touching == 0} value={0} control={<Radio />} label={<FormattedMessage id="answer2_no_breast_survey" />} />
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <FormControl component="fieldset">
                            <FormLabel component="legend">3. <FormattedMessage id="have_lemon_peel_breast_survey" /></FormLabel>
                            <RadioGroup aria-label="gender" name="gender1" value={lemon} onChange={(e) => {
                                setLemon(e.target.value)
                            }} style={{ display: 'flex', flexDirection: 'row' }}>
                                <FormControlLabel checked={lemon == 2} value={2} control={<Radio />} label={<FormattedMessage id="answer3_yes_breast_survey" />} />
                                <FormControlLabel checked={lemon == 0} value={0} control={<Radio />} label={<FormattedMessage id="answer3_no_breast_survey" />} />
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <FormControl component="fieldset">
                            <FormLabel component="legend">4. <FormattedMessage id="have_nipple_discharge_breast_survey" /></FormLabel>
                            <RadioGroup aria-label="gender" name="gender1" value={excreta} onChange={(e) => {
                                setExcreta(e.target.value)
                            }} style={{ display: 'flex', flexDirection: 'row' }}>
                                <FormControlLabel checked={excreta == 1} value={1} control={<Radio />} label={<FormattedMessage id="answer4_yes_breast_survey" />} />
                                <FormControlLabel checked={excreta == 0} value={0} control={<Radio />} label={<FormattedMessage id="answer4_no_breast_survey" />} />
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <FormControl component="fieldset">
                            <FormLabel component="legend">5. <FormattedMessage id="have_change_nipple_breast_survey" /></FormLabel>
                            <RadioGroup aria-label="gender" name="gender1" value={changes} onChange={(e) => {
                                setChanges(e.target.value)
                            }} style={{ display: 'flex', flexDirection: 'row' }}>
                                <FormControlLabel checked={changes == 1} value={1} control={<Radio />} label={<FormattedMessage id="answer5_yes_breast_survey" />} />
                                <FormControlLabel checked={changes == 0} value={0} control={<Radio />} label={<FormattedMessage id="answer5_no_breast_survey" />} />
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <FormControl component="fieldset">
                            <FormLabel component="legend">6. <FormattedMessage id="when_mammogram_breast_survey" /></FormLabel>
                            <RadioGroup aria-label="gender" name="gender1" value={mammography} onChange={(e) => {
                                setMammography(e.target.value)
                            }} style={{ display: 'flex', flexDirection: 'row' }}>

                                <FormControlLabel checked={mammography == 0} value={0} control={<Radio />}
                                    label={<FormattedMessage id="answer6_this_year_breast_survey" />} />
                                <FormControlLabel checked={mammography == 1} value={1} control={<Radio />}
                                    label={<FormattedMessage id="answer6_last_year_breast_survey" />} />
                                <FormControlLabel checked={mammography == 3} value={3} control={<Radio />}
                                    label={<FormattedMessage id="answer6_no_breast_survey" />} />
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <FormControl component="fieldset">
                            <FormLabel component="legend">7. <FormattedMessage id="have_confirmed_malignancy_breast_survey" /></FormLabel>
                            <RadioGroup aria-label="gender" name="gender1" value={accessMalignant} onChange={(e) => {
                                setAccessMalignant(e.target.value)
                            }} style={{ display: 'flex', flexDirection: 'row' }}>
                                <FormControlLabel checked={accessMalignant == 1} value={1} control={<Radio />}
                                    label={<FormattedMessage id="answer7_yes_breast_survey" />} />
                                <FormControlLabel checked={accessMalignant == 0} value={0} control={<Radio />}
                                    label={<FormattedMessage id="answer7_no_breast_survey" />} />
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <FormControl component="fieldset">
                            <FormLabel component="legend">8. <FormattedMessage id="menstruation_age_breast_survey" /></FormLabel>
                            <Grid item xs={12} sm={6}>
                                <TextField id={"outlined-basic"}
                                    type="number"
                                    variant={"outlined"}
                                    required
                                    value={menstruation}
                                    onChange={(e) => {
                                        setMenstruation(e.target.value)
                                    }} />
                            </Grid>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <FormControl component="fieldset">
                            <FormLabel component="legend">9. <FormattedMessage id="had_childbirth_breast_survey" /></FormLabel>
                            <RadioGroup aria-label="gender" name="gender1" value={childBirth} onChange={(e) => {
                                setChildBirth(e.target.value)
                            }} style={{ display: 'flex', flexDirection: 'row' }}>
                                <FormControlLabel checked={childBirth == 1} value={1} control={<Radio />}
                                    label={<FormattedMessage id="answer9_yes_breast_survey" />} />
                                <FormControlLabel checked={childBirth == 0} value={0} control={<Radio />}
                                    label={<FormattedMessage id="answer9_no_breast_survey" />} />
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <FormControl component="fieldset">
                            <FormLabel component="legend">10. <FormattedMessage id="had_temperature_breast_survey" /></FormLabel>
                            <RadioGroup aria-label="gender" name="gender1" value={temperature} onChange={(e) => {
                                setTemperature(e.target.value)
                            }} style={{ display: 'flex', flexDirection: 'row' }}>
                                <FormControlLabel checked={temperature == 1} value={1} control={<Radio />} label={<FormattedMessage id="answer10_yes_breast_survey" />} />
                                <FormControlLabel checked={temperature == 0} value={0} control={<Radio />} label={<FormattedMessage id="answer10_no_breast_survey" />} />
                            </RadioGroup>
                        </FormControl>
                        <FormStyle item xs={12}>
                            <FormControlLabel
                                control={<Checkbox value="allowRules" color="primary" checked={checked}
                                    onChange={soldCheckbox} />}
                                label={''}
                            />
                            <LinkStyle color='primary' href={'/IDS.doc'} target={'_blank'}><FormattedMessage id="consent_breast_survey" /></LinkStyle>
                        </FormStyle>
                    </Grid>
                    <Button style={{ marginTop: 20 }}
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        onClick={handlerPost}
                        disabled={!isActiveButton}
                    >
                        <FormattedMessage id="save_breast_survey" />
                    </Button>
                </Grid>
            </Box>
            <Box mt={5}>
                <Copyright />
            </Box>
        </Root>
    );
};

export default BreastSurvey