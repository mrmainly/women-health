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
export default function LiverSurvey({ arr, id }) {
    const [hepatits, setHepatits] = useState(null);
    const [HBsAg, setHBsAg] = useState(null);
    const [cirrhosis, setCirrhosis] = useState(null);
    const [itchySkin, setItchySkin] = useState(null);
    const [hypochondrium, setHypochondrium] = useState(null);
    const [vomitingИlood, setVomitingИlood] = useState(null);
    const [weightLoss, setWeightLoss] = useState(null);
    const [parentsCancer, setParentsСancer] = useState(null);
    const [childBirth, setChildBirth] = useState(null);
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
                    answer: scoreInc(hepatits),
                    score: hepatits,
                },
                {
                    text: arr[1],
                    answer: scoreInc(HBsAg),
                    score: HBsAg
                },
                {
                    text: arr[2],
                    answer: scoreInc(cirrhosis),
                    score: cirrhosis
                },
                {
                    text: arr[3],
                    answer: scoreInc(itchySkin),
                    score: itchySkin
                },
                {
                    text: arr[4],
                    answer: scoreInc(hypochondrium),
                    score: hypochondrium
                },
                {
                    text: arr[5],
                    answer: scoreInc(vomitingИlood),
                    score: vomitingИlood
                },
                {
                    text: arr[6],
                    answer: scoreInc(weightLoss),
                    score: weightLoss
                },
                {
                    text: arr[7],
                    answer: scoreInc(parentsCancer),
                    score: parentsCancer
                },
                {
                    text: arr[8],
                    answer: scoreInc(temperature),
                    score: 0
                },
            ]
        }, dispatch)
    };

    return (
        <Root component="main" maxWidth="md">
            <Typography component="h1" variant="h5"
                style={{ display: 'flex', justifyContent: "center", alignItems: "center", padding: 20 }}>
                Быар ыарыыларын тургутуу (быар сыстыганнаах ыарыылара)
            </Typography>
            {/* {show && <ModalTrue />}
            {showFalse && <ModalFalse />}
            {showMiddle && <ModalMiddle />} */}
            <Grid container spacing={6}>
                <Grid item xs={12} sm={12}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">1.{arr[0]}</FormLabel>
                        <RadioGroup value={hepatits} onChange={(e) => {
                            console.log(e.target.value)
                            setHepatits(e.target.value)
                        }} style={{ display: 'flex', flexDirection: 'row' }}>
                            <FormControlLabel checked={hepatits == 2} value={2} control={<Radio />} label="Туруоран" />
                            <FormControlLabel checked={hepatits == 0} value={0} control={<Radio />} label="Суох" />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={12}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">2. {arr[1]}</FormLabel>
                        <RadioGroup value={HBsAg} onChange={(e) => {
                            setHBsAg(e.target.value)
                        }} style={{ display: 'flex', flexDirection: 'row' }}>
                            <FormControlLabel checked={HBsAg == 1} value={1} control={<Radio />} label="Баар" />
                            <FormControlLabel checked={HBsAg == 0} value={0} control={<Radio />} label="Суох" />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={12}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">3. {arr[2]}</FormLabel>
                        <RadioGroup aria-label="gender" name="gender1" value={cirrhosis} onChange={(e) => {
                            setCirrhosis(e.target.value)
                        }} style={{ display: 'flex', flexDirection: 'row' }}>
                            <FormControlLabel checked={cirrhosis == 3} value={3} control={<Radio />} label="Инньэ диэччилэр" />
                            <FormControlLabel checked={cirrhosis == 0} value={0} control={<Radio />} label="Суох" />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={12}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">4. {arr[3]}
                        </FormLabel>
                        <RadioGroup aria-label="gender" name="gender1" value={itchySkin} onChange={(e) => {
                            setItchySkin(e.target.value)
                        }} style={{ display: 'flex', flexDirection: 'row' }}>
                            <FormControlLabel checked={itchySkin == 1} value={1} control={<Radio />} label="Кыһыйар" />
                            <FormControlLabel checked={itchySkin == 0} value={0} control={<Radio />} label="Суох" />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={12}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">5. {arr[4]}</FormLabel>
                        <RadioGroup aria-label="gender" name="gender1" value={hypochondrium} onChange={(e) => {
                            setHypochondrium(e.target.value)
                        }} style={{ display: 'flex', flexDirection: 'row' }}>
                            <FormControlLabel checked={hypochondrium == 1} value={1} control={<Radio />} label="Ыалдьааччы" />
                            <FormControlLabel checked={hypochondrium == 0} value={0} control={<Radio />} label="Суох" />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={12}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">6. {arr[5]}</FormLabel>
                        <RadioGroup aria-label="gender" name="gender1" value={vomitingИlood} onChange={(e) => {
                            setVomitingИlood(e.target.value)
                        }} style={{ display: 'flex', flexDirection: 'row' }}>
                            <FormControlLabel checked={vomitingИlood == 10} value={10} control={<Radio />} label="Хотуолаан" />
                            <FormControlLabel checked={vomitingИlood == 0} value={0} control={<Radio />} label="Суох" />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={12}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">7. {arr[6]}</FormLabel>
                        <RadioGroup aria-label="gender" name="gender1" value={weightLoss} onChange={(e) => {
                            setWeightLoss(e.target.value)
                        }} style={{ display: 'flex', flexDirection: 'row' }}>
                            <FormControlLabel checked={weightLoss == 10} value={10} control={<Radio />} label="Түһэн" />
                            <FormControlLabel checked={weightLoss == 0} value={0} control={<Radio />} label="Суох" />

                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={12}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">8. {arr[7]}</FormLabel>
                        <RadioGroup aria-label="gender" name="gender1" value={parentsCancer} onChange={(e) => {
                            setParentsСancer(e.target.value)
                        }} style={{ display: 'flex', flexDirection: 'row' }}>
                            <FormControlLabel checked={parentsCancer == 3} value={3} control={<Radio />} label="Ыалдьан" />
                            <FormControlLabel checked={parentsCancer == 0} value={0} control={<Radio />} label="Суох" />

                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={12}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">9. {arr[8]}</FormLabel>
                        <RadioGroup aria-label="gender" name="gender1" value={temperature} onChange={(e) => {
                            setTemperature(e.target.value)
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
                    ЫЫТАРГА
                </Button>
            </Grid>
            {/* <Box mt={5}>
                <Copyright />
            </Box> */}
        </Root>
    );
};