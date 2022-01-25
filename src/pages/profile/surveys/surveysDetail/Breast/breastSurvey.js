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
                return "Да"
            } else {
                return "Нет"
            }
        }
        let scoreMammograpgy = (answer) => {
            switch (answer) {
                case "1":
                    return "Прошла в прошлом году";
                    break;
                case "3":
                    return "Никогда не проходила";
                    break;
                case "0":
                    return "Прошла в этом году";
            }
        }
        Api.sendSurveys({
            survey_type: id,
            fields: [
                {
                    text: 'Есть ли среди Ваших родственников (отец/ мать; бабушка/дедушка; сестра/ брат) случаи заболевания раком молочной железы, раком толстой кишки, раком матки и яичников',
                    answer: scoreInc(accessFamily),
                    score: accessFamily
                },
                {
                    text: 'При пальпации молочной железы определяете ли Вы какое ни будь образование?',
                    answer: scoreInc(touching),
                    score: touching
                },
                {
                    text: 'Имеются ли Вы на молочной железе участки кожи напоминающий «лимонную корку»?',
                    answer: scoreInc(lemon),
                    score: lemon
                },
                {
                    text: 'Имеются ли Вы выделения из соска?',
                    answer: scoreInc(excreta),
                    score: excreta
                },
                {
                    text: 'Не отмечали ли Вы изменение соска (втяжение)?',
                    answer: scoreInc(changes),
                    score: changes
                },
                {
                    text: 'Когда Вы проходили последний раз маммографию?',
                    answer: scoreMammograpgy(mammography),
                    score: calculateMammography()
                },
                {
                    text: 'Имеются ли у Вас подтверждённое злокачественное новообразование?',
                    answer: scoreInc(accessMalignant),
                    score: accessMalignant
                },
                {
                    text: 'Укажите возраст начала менструации',
                    answer: menstruation,
                    score: 0
                },
                {
                    text: 'Были ли у Вас роды ?',
                    answer: scoreInc(childBirth),
                    score: 0
                },
                {
                    text: 'Последние 10 дней были ли у Вас эпизоды повышения температуры тела выше 37,5*С.',
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
                Эмиий ыарыыларын тургутуу
            </Typography>
            <Box style={{ width: '100%' }}>
                <Grid container spacing={6}>
                    <Grid item xs={12} sm={12}>
                        <FormControl component="fieldset">
                            <FormLabel component="legend">1. {arr[0]}</FormLabel>
                            <RadioGroup value={accessFamily} onChange={(e) => {
                                setAccessFamily(e.target.value)
                            }} style={{ display: 'flex', flexDirection: 'row' }}>
                                <FormControlLabel checked={accessFamily == 3} value={3} control={<Radio />} label="Ыалдьан" />
                                <FormControlLabel checked={accessFamily == 0} value={0} control={<Radio />} label="Суох " />
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <FormControl component="fieldset">
                            <FormLabel component="legend">2. {arr[1]}</FormLabel>
                            <RadioGroup value={touching} onChange={(e) => {
                                setTouching(e.target.value)
                            }} style={{ display: 'flex', flexDirection: 'row' }}>
                                <FormControlLabel checked={touching == 1} value={1} control={<Radio />} label="Баар" />
                                <FormControlLabel checked={touching == 0} value={0} control={<Radio />} label="Суох " />
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <FormControl component="fieldset">
                            <FormLabel component="legend">3. {arr[2]}</FormLabel>
                            <RadioGroup aria-label="gender" name="gender1" value={lemon} onChange={(e) => {
                                setLemon(e.target.value)
                            }} style={{ display: 'flex', flexDirection: 'row' }}>
                                <FormControlLabel checked={lemon == 2} value={2} control={<Radio />} label="Баар" />
                                <FormControlLabel checked={lemon == 0} value={0} control={<Radio />} label="Суох " />
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <FormControl component="fieldset">
                            <FormLabel component="legend">4. {arr[3]}</FormLabel>
                            <RadioGroup aria-label="gender" name="gender1" value={excreta} onChange={(e) => {
                                setExcreta(e.target.value)
                            }} style={{ display: 'flex', flexDirection: 'row' }}>
                                <FormControlLabel checked={excreta == 1} value={1} control={<Radio />} label="Тахсар" />
                                <FormControlLabel checked={excreta == 0} value={0} control={<Radio />} label="Суох " />
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <FormControl component="fieldset">
                            <FormLabel component="legend">5. {arr[4]}</FormLabel>
                            <RadioGroup aria-label="gender" name="gender1" value={changes} onChange={(e) => {
                                setChanges(e.target.value)
                            }} style={{ display: 'flex', flexDirection: 'row' }}>
                                <FormControlLabel checked={changes == 1} value={1} control={<Radio />} label="Уларыйда" />
                                <FormControlLabel checked={changes == 0} value={0} control={<Radio />} label="суох " />
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <FormControl component="fieldset">
                            <FormLabel component="legend">6. {arr[5]}</FormLabel>
                            <RadioGroup aria-label="gender" name="gender1" value={mammography} onChange={(e) => {
                                setMammography(e.target.value)
                            }} style={{ display: 'flex', flexDirection: 'row' }}>

                                <FormControlLabel checked={mammography == 0} value={0} control={<Radio />}
                                    label="Быйыл" />
                                <FormControlLabel checked={mammography == 1} value={1} control={<Radio />}
                                    label="Былырыын" />
                                <FormControlLabel checked={mammography == 3} value={3} control={<Radio />}
                                    label="Хаһан да барбатаҕым" />
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <FormControl component="fieldset">
                            <FormLabel component="legend">7. {arr[6]}</FormLabel>
                            <RadioGroup aria-label="gender" name="gender1" value={accessMalignant} onChange={(e) => {
                                setAccessMalignant(e.target.value)
                            }} style={{ display: 'flex', flexDirection: 'row' }}>
                                <FormControlLabel checked={accessMalignant == 1} value={1} control={<Radio />}
                                    label="Баар" />
                                <FormControlLabel checked={accessMalignant == 0} value={0} control={<Radio />}
                                    label="Суох " />
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <FormControl component="fieldset">
                            <FormLabel component="legend">8. {arr[7]}</FormLabel>
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
                            <FormLabel component="legend">9. {arr[8]}</FormLabel>
                            <RadioGroup aria-label="gender" name="gender1" value={childBirth} onChange={(e) => {
                                setChildBirth(e.target.value)
                            }} style={{ display: 'flex', flexDirection: 'row' }}>
                                <FormControlLabel checked={childBirth == 1} value={1} control={<Radio />}
                                    label="Баар" />
                                <FormControlLabel checked={childBirth == 0} value={0} control={<Radio />}
                                    label="Суох" />
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <FormControl component="fieldset">
                            <FormLabel component="legend">10. {arr[9]}</FormLabel>
                            <RadioGroup aria-label="gender" name="gender1" value={temperature} onChange={(e) => {
                                setTemperature(e.target.value)
                            }} style={{ display: 'flex', flexDirection: 'row' }}>
                                <FormControlLabel checked={temperature == 1} value={1} control={<Radio />} label="Тахсан" />
                                <FormControlLabel checked={temperature == 0} value={0} control={<Radio />} label="Суох " />
                            </RadioGroup>
                        </FormControl>
                        <FormStyle item xs={12}>
                            <FormControlLabel
                                control={<Checkbox value="allowRules" color="primary" checked={checked}
                                    onChange={soldCheckbox} />}
                                label={''}
                            />
                            <LinkStyle color='primary' href={'/IDS.doc'} target={'_blank'}>Тэрили өйдөөн хааларга</LinkStyle>
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
                        ЫЫТАРГА
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