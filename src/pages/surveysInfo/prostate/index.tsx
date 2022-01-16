import React, { useState } from 'react'

import { InfoScreen, TextInfoScreen, ThreeScreen, FourScreen, LinkToSurveysScreen, MyContainer, MyButton } from '../../../components'

import { CaruselSurvey, TitleScreen } from '../../../constructor'

const Prostate = () => {
    const [state, setState] = useState(false)
    const data1 = [
        {
            type: 'text',
            elem: [
                'В начальной стадии в течение длительного времени заболевание может протекать без каких-либо заметных симптомов. Поэтому после 45 лет мужчинам нужно обязательно проходить медицинский осмотр и регулярно сдавать анализы. Чем раньше будет обнаружена болезнь, тем больше шансов на успешное лечение. Чаще рак простаты диагностируют у мужчин в возрасте от 55 и старше. Каждый год в мире регистрируют приблизительно 6,5 тысяч новых случаев',
                'В России заболеваемость раком простаты занимает 7-8',
                'В Республике Саха (Якутия) в 2019 году было выявлено 114 случаев рака предстательной железы. При этом на I-II стадии процесса было диагностировано 54% заболеваний, на III стадии – 8,8 % и на IV стадии – 37,2%. В течение первого года с момента установления диагноза умерло 6,7% пациентов.'
            ],
        },
        {
            title: 'Симптомы ',
            type: 'text',
            elem: [
                'Симптомов, характерных только для рака предстательной железы, не существует.Возможны следующие симптомы:'
            ],
        },
        {
            type: 'column',
            elem: [
                'частые позывы к мочеиспусканию, ощущение неполного опорожнения мочевого пузыря, спастические или болевые ощущения в промежности;',
                'в запущенных случаях рака – затруднение при мочеиспускании, наличие прерывистой или тонкой струи мочи, задержка мочи, увеличение времени мочеиспускания, необходимость напрягать мышцы брюшного пресса для полного опорожнения мочевого пузыря.'
            ],
        },
    ]

    const data2 = [
        {
            align: 'start',
            text: [
                'К основным методам диагностики рака предстательной железы относятся:',
                'Исследование крови - скрининг на сывороточный уровень простат-специфического антигена (ПСА). Обычно скрининг проводится у мужчин 50 лет, но иногда скрининг начинают раньше у мужчин с высоким риском развития заболевания (например, с семейным анамнезом рака простаты);',
                'Ректальное обследование простаты;',
                'Ультразвуковое исследование простаты;'
            ],
        },
    ]

    const data3 = [
        {
            title: 'ПОКАЗАНИЯ ДЛЯ ПРОВЕДЕНИЯ СКРИНИНГА',
            text: [
                'цирроз печени;',
                'активный гепатит B;',
                'хронический гепатит С;',
                'лица мужского пола с носительством гепатита В старше 40 лет;',
                'лица женского пола с носительством гепатита В старше 50 лет.',
            ],
        },
    ]

    return (
        <div>
            <InfoScreen
                title="РАК ПРЕДСТАТЕЛЬНОЙ ЖЕЛЕЗЫ"
                description='РАК ПРЕДСТАТЕЛЬНОЙ ЖЕЛЕЗЫ - форма рака, развивающегося в предстательной железе (простате), которая принадлежит мужской репродуктивной системе.'
                img="prostata"
                infoImg="Frame27"
            />
            <TextInfoScreen data={data1} />
            <ThreeScreen data={data2} showInfoText={true} />
            <FourScreen data={data3} />
            <LinkToSurveysScreen link="" />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <MyButton
                    sx={{
                        bgcolor: '#EB5757',
                        mb: 5
                    }}
                    onClick={() => {
                        setState(!state)
                    }}
                >
                    Посмотреть доступные анкеты
                </MyButton>
            </div>
            {state &&
                <MyContainer
                    wrapper={false}
                    minHeight={600}
                >
                    <CaruselSurvey />
                </MyContainer>
            }
        </div>
    )
}

export default Prostate