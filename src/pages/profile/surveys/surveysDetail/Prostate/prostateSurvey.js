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

export default function ProstateLandingForm({ arr, id }) {
    const [toiletTimes, setToiletTimes] = useState(null);
    const [notFull, setNotFull] = useState(null);
    const [bloodIn, setBloodIn] = useState(null);
    const [delay, setDelay] = useState(null);
    const [oncomarkerResult, setOnkomarkerResult] = useState(null);
    const [accessMalignant, setAccessMalignant] = useState(null);
    const [inputDay, setInputDay] = useState(null);
    const [inputResult, setInputResult] = useState(null)
    const [temperature, setTemperature] = useState(null)
    const [show, setShow] = useState(false)
    const [showFalse, setShowFalse] = useState(false)
    const [showMiddle, setShowMiddle] = useState(false)
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
    let calculateOnkom = () => {
        if (oncomarkerResult == 0 || 2) {
            return 0;
        }
        else {
            setInputResult(new Date().getFullYear().valueOf() - inputDay)
            return inputResult > 1 ? 2 : 0
        }
    }
    useEffect(() => {
        calculateOnkom()
    }, [inputDay])

    const handleChange = async (event) => {
        await setInputDay(event.target.value)
        await console.log(inputDay)
    }
    // const handlerPost = async () => {
    //     let scoreInc = (answer) => {
    //         if (answer > 0) {
    //             return "Да"
    //         } else {
    //             return "Нет"
    //         }
    //     }
    //     let scoreToilet = (answer) => {
    //         switch (answer) {
    //             case "1":
    //                 return "1 раз";
    //                 break;
    //             case "0":
    //                 return "Не просыпаюсь";
    //                 break;
    //             case "2":
    //                 return "2 и более раза";
    //         }
    //     }
    //     let scoreOnkom = (answer) => {
    //         switch (answer) {
    //             case "1":
    //                 return "немного повышенный";
    //                 break;
    //             case "2":
    //                 return "не проходил";
    //                 break;
    //             case "0":
    //                 return "в пределах нормы";
    //         }
    //     }
    //     axios
    //         .post("/api/front/surveys_api/surveys", {
    //             survey_type: id,
    //             fields: [
    //                 {
    //                     text: arr[0],
    //                     answer: scoreToilet(toiletTimes),
    //                     score: toiletTimes < 2 ? 0 : 2
    //                 },
    //                 {
    //                     text: arr[1],
    //                     answer: scoreInc(notFull),
    //                     score: notFull
    //                 },
    //                 {
    //                     text: arr[2],
    //                     answer: scoreInc(bloodIn),
    //                     score: bloodIn
    //                 },
    //                 {
    //                     text: arr[3],
    //                     answer: scoreInc(delay),
    //                     score: delay
    //                 },
    //                 {
    //                     text: arr[4],
    //                     answer: scoreOnkom(oncomarkerResult),
    //                     score: calculateOnkom()
    //                 },
    //                 {
    //                     text: arr[5],
    //                     answer: scoreInc(accessMalignant),
    //                     score: accessMalignant
    //                 },
    //                 {
    //                     text: arr[6],
    //                     answer: scoreInc(temperature),
    //                     score: 0
    //                 },
    //             ]
    //         })
    //         .then((res) => {
    //             if (res.status == 200) {
    //                 console.log("result", res);
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
            {/* {show && <ModalTrue />}
            {showFalse && <ModalFalse />}
            {showMiddle && <ModalMiddle />} */}
            <Typography component="h1" variant="h5"
                style={{ display: 'flex', justifyContent: "center", alignItems: "center", padding: 20 }}>
                Самах былчархайын (простата) ыарыыларын тургутуу
            </Typography>
            <Grid container spacing={6}>
                <Grid item xs={12} sm={12}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">1. {arr[0]}</FormLabel>
                        <RadioGroup aria-label="gender" name="gender1" value={toiletTimes} onChange={(e) => {
                            console.log(e.target.value)
                            setToiletTimes(e.target.value)
                        }} style={{ display: 'flex', flexDirection: 'row' }}>
                            <FormControlLabel checked={toiletTimes == 0} value={0} control={<Radio />} label="Түүн турбаппын" />
                            <FormControlLabel checked={toiletTimes == 1} value={1} control={<Radio />} label="Биирдэ турабын" />
                            <FormControlLabel checked={toiletTimes == 2} value={2} control={<Radio />} label="Иккитэ эбэтэр элбэхтэ турабын" />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={12}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">2. {arr[1]}</FormLabel>
                        <RadioGroup value={notFull} onChange={(e) => {
                            setNotFull(e.target.value)
                            console.log(e.target.value)
                        }} style={{ display: 'flex', flexDirection: 'row' }}>
                            <FormControlLabel checked={notFull == 1} value={1} control={<Radio />} label="Буолар" />
                            <FormControlLabel checked={notFull == 0} value={0} control={<Radio />} label="Суох " />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={12}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">3. {arr[2]}</FormLabel>
                        <RadioGroup aria-label="gender" name="gender1" value={bloodIn} onChange={(e) => {
                            setBloodIn(e.target.value)
                        }} style={{ display: 'flex', flexDirection: 'row' }}>
                            <FormControlLabel checked={bloodIn == 2} value={2} control={<Radio />} label="Оннук буолбуттаах" />
                            <FormControlLabel checked={bloodIn == 0} value={0} control={<Radio />} label="Суох " />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={12}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">4. {arr[3]}
                        </FormLabel>
                        <RadioGroup aria-label="gender" name="gender1" value={delay} onChange={(e) => {
                            setDelay(e.target.value)
                        }} style={{ display: 'flex', flexDirection: 'row' }}>
                            <FormControlLabel checked={delay == 1} value={1} control={<Radio />} label="Оннук буола сылдьыбыттаах" />
                            <FormControlLabel checked={delay == 0} value={0} control={<Radio />} label="Суох" />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={12}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">5. {arr[4]} </FormLabel>
                        <TextField id={"outlined-basic"} label={"Введите год сдачи"} type={"number"}
                            required
                            fullWidth
                            placeholder={'2021'}
                            variant={"outlined"}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={handleChange}
                            value={inputDay}
                            style={{ marginTop: 20 }}
                        />
                        <RadioGroup aria-label="gender" name="gender1" value={oncomarkerResult} onChange={(e) => {
                            setOnkomarkerResult(e.target.value)
                        }} style={{ display: 'flex', flexDirection: 'row' }}>
                            <FormControlLabel checked={oncomarkerResult == 0} value={0} control={<Radio />} label="Норма иһинэн" />
                            <FormControlLabel checked={oncomarkerResult == 1} value={1} control={<Radio />} label="Кыратык улааппыт этэ" />
                            <FormControlLabel checked={oncomarkerResult == 2} value={2} control={<Radio />} label="Ааспатаҕым" />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={12}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">6. {arr[5]} </FormLabel>
                        <RadioGroup aria-label="gender" name="gender1" value={accessMalignant} onChange={(e) => {
                            setAccessMalignant(e.target.value)
                        }} style={{ display: 'flex', flexDirection: 'row' }}>
                            <FormControlLabel checked={accessMalignant == 1} value={1} control={<Radio />} label="Баар" />
                            <FormControlLabel checked={accessMalignant == 0} value={0} control={<Radio />} label="Суох  " />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={12}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">7. {arr[6]}</FormLabel>
                        <RadioGroup aria-label="gender" name="gender1" value={temperature} onChange={(e) => {
                            setTemperature(e.target.value)
                        }} style={{ display: 'flex', flexDirection: 'row' }}>
                            {/*# TODO нет вариантов*/}
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
                    <LinkStyle color='primary' href={'/IDS.doc'} target={'_blank'}>Тэрили өйдөөн хааларга</LinkStyle>
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