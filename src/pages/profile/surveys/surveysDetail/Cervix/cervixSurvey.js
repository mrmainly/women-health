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
import { FormattedMessage } from "react-intl";

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
export default function CervixLandingForm({ arr, id, }) {
    const [sexualActivity, setSexualActivity] = useState(null);
    const [partners, setPartners] = useState(null);
    const [numbOfBirths, setNumbOfBirths] = useState(null);
    const [trauma, setTrauma] = useState(null);
    const [hvp, setHps] = useState(null);
    const [discharge, setDischarge] = useState(null);
    const [painful, setPainful] = useState(null);
    const [diseases, setDiseases] = useState(null);
    const [gynecologist, setGynecologist] = useState(null);
    const [temperature, setTemperature] = useState(null);
    const [painf, setPainf] = useState(null)
    const [show, setShow] = useState(false);
    const [showFalse, setShowFalse] = useState(false);
    const [showMiddle, setShowMiddle] = useState(false);
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

    const handlerPost = async () => {
        let scoreInc = (answer) => {
            if (answer > 0) {
                return "Да"
            } else {
                return "Нет"
            }
        }
        let scoreGynec = (answer) => {
            switch (answer) {
                case "1":
                    return "Прошла в прошлом году";
                    break;
                case "2":
                    return "Никогда не проходила";
                    break;
                case "0":
                    return "Прошла в этом году";
            }
        }
        let scoreCervix = (answer) => {
            switch (answer) {
                case "0":
                    return "Нет";
                    break;
                case "1":
                    return "эрозия шейки матки";
                    break;
                case "2":
                    return "Дисплазия шейки матки";
                    break;
                case "3":
                    return "лейкоплакия шейки матки";
                    break;
                case "4":
                    return "эндоцервицит";
            }
        }
        Api.sendSurveys({
            survey_type: id,
            fields: [
                {
                    text: 'Укажите пожалуйста начало половой жизни​',
                    answer: sexualActivity,
                    score: sexualActivity >= 18 ? 0 : 1
                },
                {
                    text: 'Укажите пожалуйста количество половых партнёров',
                    answer: partners,
                    score: partners >= 2 ? 1 : 0
                },
                {
                    text: 'Укажите пожалуйста количество родов',
                    answer: numbOfBirths,
                    score: numbOfBirths < 4 ? 0 : 1
                },
                {
                    text: 'При родах были ли травмы шейки матки (разрывы)',
                    answer: scoreInc(trauma),
                    score: trauma
                },
                {
                    text: 'Получали ли вакцину от вируса папилломы человека (ВПЧ)?',
                    answer: scoreInc(hvp),
                    score: hvp
                },
                {
                    text: 'Имеются ли у Вас выделения из половых путей после полового акта',
                    answer: scoreInc(discharge),
                    score: discharge
                },
                {
                    text: 'Бывают ли болевые ощущения при половом акте?',
                    answer: scoreInc(painful),
                    score: painful
                },
                {
                    text: 'Проходили ли Вы лечения по поводу заболеваний шейки матки?',
                    answer: scoreCervix(painf),
                    score: painf > 0 ? 2 : 0
                },
                {
                    text: 'Было ли выявлено носительство ВПЧ инфекции?',
                    answer: scoreInc(diseases),
                    score: diseases
                },
                {
                    text: 'Когда были в последний раз у врача гинеколога?',
                    answer: scoreGynec(gynecologist),
                    score: gynecologist
                },
                {
                    text: 'Последние 10 дней были ли у Вас эпизоды повышения температуры тела выше 37,5*С',
                    answer: scoreInc(temperature),
                    score: 0
                }
            ]
        }, dispatch)
    };
    return (
        <Root component="main" maxWidth="md">
            <ModalSurveyStatus />
            <Typography component="h1" variant="h5"
                style={{ display: 'flex', justifyContent: "center", alignItems: "center", padding: 20 }}>
                <FormattedMessage id="name_cervix_survey" />
            </Typography>
            {/* {show && <ModalTrue />}
            {showFalse && <ModalFalse />}
            {showMiddle && <ModalMiddle />} */}
            <Grid container spacing={6}>
                <Grid item xs={12} sm={12}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">1. <FormattedMessage id="beginning_sexual_activity" /></FormLabel>
                        <Grid item xs={12} sm={6}>
                            <TextField id={"outlined-basic"} type="number" variant={"outlined"} required value={sexualActivity}
                                onChange={(e) => {
                                    setSexualActivity(e.target.value)
                                }} />
                        </Grid>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={12}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">2. <FormattedMessage id="how_partners" /></FormLabel>
                        <Grid item xs={12} sm={6}>
                            <TextField id={"outlined-basic"} type="number" variant={"outlined"} required value={partners}
                                onChange={(e) => {
                                    setPartners(e.target.value)
                                }} />
                        </Grid>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={12}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">3. <FormattedMessage id="how_births" /></FormLabel>
                        <Grid item xs={12} sm={6}>
                            <TextField id={"outlined-basic"} type="number" variant={"outlined"} required value={numbOfBirths}
                                onChange={(e) => {
                                    setNumbOfBirths(e.target.value)
                                }} />
                        </Grid>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={12}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">4. <FormattedMessage id="had_cervix_injuries" /></FormLabel>
                        <RadioGroup aria-label="gender" name="gender1" value={trauma} onChange={(e) => {
                            setTrauma(e.target.value)
                        }} style={{ display: 'flex', flexDirection: 'row' }}>
                            <FormControlLabel checked={trauma == 1} value={1} control={<Radio />} label={<FormattedMessage id="answer4_yes_cervix_survey" />} />
                            <FormControlLabel checked={trauma == 0} value={0} control={<Radio />} label={<FormattedMessage id="answer4_no_cervix_survey" />} />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={12}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">5. <FormattedMessage id="have_papillomavirus_vaccine" /></FormLabel>
                        <RadioGroup aria-label="gender" name="gender1" value={hvp} onChange={(e) => {
                            setHps(e.target.value)
                        }} style={{ display: 'flex', flexDirection: 'row' }}>
                            <FormControlLabel checked={hvp == 1} value={1} control={<Radio />} label={<FormattedMessage id="answer5_yes_cervix_survey" />} />
                            <FormControlLabel checked={hvp == 0} value={0} control={<Radio />} label={<FormattedMessage id="answer5_no_cervix_survey" />} />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={12}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">6. <FormattedMessage id="have_discharge_genital" /></FormLabel>
                        <RadioGroup aria-label="gender" name="gender1" value={discharge} onChange={(e) => {
                            setDischarge(e.target.value)
                        }} style={{ display: 'flex', flexDirection: 'row' }}>
                            <FormControlLabel checked={discharge == 1} value={1} control={<Radio />} label={<FormattedMessage id="answer6_yes_cervix_survey" />} />
                            <FormControlLabel checked={discharge == 0} value={0} control={<Radio />} label={<FormattedMessage id="answer6_no_cervix_survey" />} />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={12}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">7. <FormattedMessage id="have_intercourse_pain" /></FormLabel>
                        <RadioGroup aria-label="gender" name="gender1" value={painful} onChange={(e) => {
                            setPainful(e.target.value)
                        }} style={{ display: 'flex', flexDirection: 'row' }}>
                            <FormControlLabel checked={painful == 2} value={2} control={<Radio />} label={<FormattedMessage id="answer7_yes_cervix_survey" />} />
                            <FormControlLabel checked={painful == 0} value={0} control={<Radio />} label={<FormattedMessage id="answer7_no_cervix_survey" />} />

                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={12}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">8. <FormattedMessage id="treated_diseases" /></FormLabel>
                        <RadioGroup aria-label="gender" name="gender1" value={painful} onChange={(e) => {
                            setPainf(e.target.value)
                        }} style={{ display: 'flex', flexDirection: 'row' }}>
                            <FormControlLabel checked={painf == 1} value={1} control={<Radio />} label={<FormattedMessage id="answer8_erosion" />} />
                            <FormControlLabel checked={painf == 2} value={2} control={<Radio />} label={<FormattedMessage id="answer8_dysplasia" />} />
                            <FormControlLabel checked={painf == 3} value={3} control={<Radio />} label={<FormattedMessage id="answer8_leukoplakia" />} />
                            <FormControlLabel checked={painf == 4} value={4} control={<Radio />} label={<FormattedMessage id="answer8_endocervicitis" />} />
                            <FormControlLabel checked={painf == 0} value={0} control={<Radio />} label={<FormattedMessage id="answer8_no" />} />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={12}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">9.  <FormattedMessage id="detected_hpv" /></FormLabel>
                        <RadioGroup aria-label="gender" name="gender1" value={diseases} onChange={(e) => {
                            setDiseases(e.target.value)
                        }} style={{ display: 'flex', flexDirection: 'row' }}>
                            <FormControlLabel checked={diseases == 1} value={1} control={<Radio />} label={<FormattedMessage id="answer9_yes_cervix_survey" />} />
                            <FormControlLabel checked={diseases == 0} value={0} control={<Radio />} label={<FormattedMessage id="answer9_no_cervix_survey" />} />

                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={12}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">10.  <FormattedMessage id="when_gynecologist" /></FormLabel>
                        <RadioGroup aria-label="gender" name="gender1" value={gynecologist} onChange={(e) => {
                            setGynecologist(e.target.value)
                        }} style={{ display: 'flex', flexDirection: 'row' }}>
                            <FormControlLabel checked={gynecologist == 0} value={0} control={<Radio />} label={<FormattedMessage id="answer10_this_year" />} />
                            <FormControlLabel checked={gynecologist == 1} value={1} control={<Radio />} label={<FormattedMessage id="answer10_last_year" />} />
                            <FormControlLabel checked={gynecologist == 2} value={2} control={<Radio />} label={<FormattedMessage id="answer10_no" />} />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={12}>

                    <FormControl component="fieldset">
                        <FormLabel component="legend">11. <FormattedMessage id="had_temperature" /></FormLabel>
                        <RadioGroup value={temperature} onChange={(e) => {
                            setTemperature(e.target.value)
                        }} style={{ display: 'flex', flexDirection: 'row' }}>
                            <FormControlLabel checked={temperature == 1} value={1} control={<Radio />} label={<FormattedMessage id="answer11_yes_cervix_survey" />} />
                            <FormControlLabel checked={temperature == 0} value={0} control={<Radio />} label={<FormattedMessage id="answer11_no_cervix_survey" />} />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <FormStyle item xs={12}>
                    <FormControlLabel
                        control={<Checkbox value="allowRules" color="primary" checked={checked}
                            onChange={soldCheckbox} />}
                        label={''}
                    />
                    <LinkStyle color='primary' href={'/IDS.doc'} target={'_blank'}><FormattedMessage id="consent_cervix_survey" /></LinkStyle>
                </FormStyle>
                <Button style={{ marginTop: 20 }}
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={handlerPost}
                    disabled={!isActiveButton}
                >
                    <FormattedMessage id="save_cervix_survey" />
                </Button>
            </Grid>
            <Box mt={5}>
                <Copyright />
            </Box>
        </Root>
    );
};