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
import React, { useState, useEffect } from "react";
import { styled } from '@mui/system'
// import ModalTrue from '../modals/surveyModals/ModalTrue'
// import ModalFalse from '../modals/surveyModals/ModalFalse'
// import ModalMiddle from '../modals/surveyModals/ModalMiddle'

const Root = styled(Container)({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 100
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

    const checkFormValid = () => {
        checked ? setActiveButton(true) : setActiveButton(false)
    }
    useEffect(checkFormValid, [checked])
    const soldCheckbox = ({ target: { checked } }) => {
        setChecked(checked);
    };

    // const handlerPost = async () => {
    //     let scoreInc = (answer) => {
    //         if (answer > 0) {
    //             return "Да"
    //         } else {
    //             return "Нет"
    //         }
    //     }
    //     let scoreGynec = (answer) => {
    //         switch (answer) {
    //             case "1":
    //                 return "Прошла в прошлом году";
    //                 break;
    //             case "2":
    //                 return "Никогда не проходила";
    //                 break;
    //             case "0":
    //                 return "Прошла в этом году";
    //         }
    //     }
    //     let scoreCervix = (answer) => {
    //         switch (answer) {
    //             case "0":
    //                 return "Нет";
    //                 break;
    //             case "1":
    //                 return "эрозия шейки матки";
    //                 break;
    //             case "2":
    //                 return "Дисплазия шейки матки";
    //                 break;
    //             case "3":
    //                 return "лейкоплакия шейки матки";
    //                 break;
    //             case "4":
    //                 return "эндоцервицит";
    //         }
    //     }
    //     axios
    //         .post("/api/front/surveys_api/surveys", {
    //             survey_type: id,
    //             fields: [
    //                 {
    //                     text: arr[0],
    //                     answer: sexualActivity,
    //                     score: sexualActivity >= 18 ? 0 : 1
    //                 },
    //                 {
    //                     text: arr[1],
    //                     answer: partners,
    //                     score: partners >= 2 ? 1 : 0
    //                 },
    //                 {
    //                     text: arr[2],
    //                     answer: numbOfBirths,
    //                     score: numbOfBirths < 4 ? 0 : 1
    //                 },
    //                 {
    //                     text: arr[3],
    //                     answer: scoreInc(trauma),
    //                     score: trauma
    //                 },
    //                 {
    //                     text: arr[4],
    //                     answer: scoreInc(hvp),
    //                     score: hvp
    //                 },
    //                 {
    //                     text: arr[5],
    //                     answer: scoreInc(discharge),
    //                     score: discharge
    //                 },
    //                 {
    //                     text: arr[6],
    //                     answer: scoreInc(painful),
    //                     score: painful
    //                 },
    //                 {
    //                     text: arr[6],
    //                     answer: scoreCervix(painf),
    //                     score: painf > 0 ? 2 : 0
    //                 },
    //                 {
    //                     text: arr[9],
    //                     answer: scoreInc(diseases),
    //                     score: diseases
    //                 },
    //                 {
    //                     text: arr[8],
    //                     answer: scoreGynec(gynecologist),
    //                     score: gynecologist
    //                 },
    //                 {
    //                     text: arr[10],
    //                     answer: scoreInc(temperature),
    //                     score: 0
    //                 }
    //             ]
    //         })
    //         .then((res) => {
    //             if (res.status == 200) {
    //                 console.log("result", res);
    //                 ; console.log("danger", res.data.is_danger);
    //                 const danger = res.data.is_danger
    //                 const clinic = res.data.to_clinic
    //                 if (danger == true && clinic == false) {
    //                     setShow(true)
    //                 }
    //                 if (danger == false && clinic == false) {
    //                     setShowFalse(true)
    //                 }
    //                 if (clinic == true) {
    //                     setShowMiddle(true)
    //                 }
    //             }
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //             alert("У вас ошибка в форме анкеты");
    //         });
    // };
    return (
        <Root component="main" maxWidth="md">
            <Typography component="h1" variant="h5"
                style={{ display: 'flex', justifyContent: "center", alignItems: "center", padding: 20 }}>
                Киэли хапчаҕайын (шейка матки) ыарыыларын тургутуу
            </Typography>
            {/* {show && <ModalTrue />}
            {showFalse && <ModalFalse />}
            {showMiddle && <ModalMiddle />} */}
            <Grid container spacing={6}>
                <Grid item xs={12} sm={12}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">1. {arr[0]}</FormLabel>
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
                        <FormLabel component="legend">2. {arr[1]}</FormLabel>
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
                        <FormLabel component="legend">3. {arr[2]}</FormLabel>
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
                        <FormLabel component="legend">4. {arr[3]}</FormLabel>
                        <RadioGroup aria-label="gender" name="gender1" value={trauma} onChange={(e) => {
                            setTrauma(e.target.value)
                        }} style={{ display: 'flex', flexDirection: 'row' }}>
                            <FormControlLabel checked={trauma == 1} value={1} control={<Radio />} label="Хайдан" />
                            <FormControlLabel checked={trauma == 0} value={0} control={<Radio />} label="Суох " />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={12}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">5. {arr[4]}</FormLabel>
                        <RadioGroup aria-label="gender" name="gender1" value={hvp} onChange={(e) => {
                            setHps(e.target.value)
                        }} style={{ display: 'flex', flexDirection: 'row' }}>
                            <FormControlLabel checked={hvp == 1} value={1} control={<Radio />} label="Ылан" />
                            <FormControlLabel checked={hvp == 0} value={0} control={<Radio />} label="Суох " />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={12}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">6. {arr[5]}</FormLabel>
                        <RadioGroup aria-label="gender" name="gender1" value={discharge} onChange={(e) => {
                            setDischarge(e.target.value)
                        }} style={{ display: 'flex', flexDirection: 'row' }}>
                            <FormControlLabel checked={discharge == 1} value={1} control={<Radio />} label="Кэлэр" />
                            <FormControlLabel checked={discharge == 0} value={0} control={<Radio />} label="Суох" />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={12}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">7. {arr[6]}</FormLabel>
                        <RadioGroup aria-label="gender" name="gender1" value={painful} onChange={(e) => {
                            setPainful(e.target.value)
                        }} style={{ display: 'flex', flexDirection: 'row' }}>
                            <FormControlLabel checked={painful == 2} value={2} control={<Radio />} label="Ыалдьар" />
                            <FormControlLabel checked={painful == 0} value={0} control={<Radio />} label="Суох" />

                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={12}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">8. {arr[7]}</FormLabel>
                        <RadioGroup aria-label="gender" name="gender1" value={painful} onChange={(e) => {
                            setPainf(e.target.value)
                        }} style={{ display: 'flex', flexDirection: 'row' }}>
                            <FormControlLabel checked={painf == 1} value={1} control={<Radio />} label="- эрозия шейки матки" />
                            <FormControlLabel checked={painf == 2} value={2} control={<Radio />} label="- Дисплазия шейки матки" />
                            <FormControlLabel checked={painf == 3} value={3} control={<Radio />} label="- лейкоплакия шейки матки" />
                            <FormControlLabel checked={painf == 4} value={4} control={<Radio />} label="- эндоцервицит" />
                            <FormControlLabel checked={painf == 0} value={0} control={<Radio />} label="Суох " />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={12}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">9.  {arr[9]}</FormLabel>
                        <RadioGroup aria-label="gender" name="gender1" value={diseases} onChange={(e) => {
                            setDiseases(e.target.value)
                        }} style={{ display: 'flex', flexDirection: 'row' }}>
                            <FormControlLabel checked={diseases == 1} value={1} control={<Radio />} label="Баар" />
                            <FormControlLabel checked={diseases == 0} value={0} control={<Radio />} label="Суох " />

                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={12}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">10.  {arr[8]}</FormLabel>
                        <RadioGroup aria-label="gender" name="gender1" value={gynecologist} onChange={(e) => {
                            setGynecologist(e.target.value)
                        }} style={{ display: 'flex', flexDirection: 'row' }}>
                            <FormControlLabel checked={gynecologist == 0} value={0} control={<Radio />} label="Быйыл" />
                            <FormControlLabel checked={gynecologist == 1} value={1} control={<Radio />} label="Былырыын" />
                            <FormControlLabel checked={gynecologist == 2} value={2} control={<Radio />} label="Сылдьыбатаҕым ыраатта" />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={12}>

                    <FormControl component="fieldset">
                        <FormLabel component="legend">11.{arr[10]}</FormLabel>
                        <RadioGroup value={temperature} onChange={(e) => {
                            setTemperature(e.target.value)
                        }} style={{ display: 'flex', flexDirection: 'row' }}>
                            <FormControlLabel checked={temperature == 1} value={1} control={<Radio />} label="Тахсан" />
                            <FormControlLabel checked={temperature == 0} value={0} control={<Radio />} label="Суох " />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <FormStyle item xs={12}>
                    <FormControlLabel
                        control={<Checkbox value="allowRules" color="primary" checked={checked}
                            onChange={soldCheckbox} />}
                        label={''}
                    />

                    <LinkStyle color='primary' href={'/IDS.doc'} target={'_blank'}>СТэрили өйдөөн хааларга</LinkStyle>
                </FormStyle>
                <Button style={{ marginTop: 20 }}
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    // onClick={handlerPost}
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