import React, { useState } from 'react'

import { InfoScreen, TextInfoScreen, ThreeScreen, FourScreen, LinkToSurveysScreen, MyContainer, MyButton } from '../../../components'

import { CaruselSurvey, TitleScreen } from '../../../constructor'
import { FormattedMessage } from "react-intl";
import { useNavigate } from 'react-router-dom'
import cookie from 'js-cookie'

const Breath = () => {
    const navigate = useNavigate()
    const data1 = [
        {
            title: "Эндометриоз. Симптомы и диагностика",
            type: 'text',
            elem: [
                'Эндометриоз обнаруживается не только отделах репродуктивной системы, но и вне ее (брюшная стенка, мочевыделительная система, пищеварительный тракт, брюшина, легкие и пр.). Клинические проявления разнообразны и зависеть от расположения патологического процесса. Могут выражаться: болью, нарушениями менструального цикла (кровянистых выделений перед началом менструации, контактных кровянистых выделений).',
                'Бесплодие, нарушения менструации, поликистоз яичников могут быть следствием генитального эндометриоза. По исследовательским данным, каждое третье гинекологическое заболевание (исключая воспалительные заболевания и миомы) у женщины - это эндометриоз или патологический процесс, вызванный им.',
            ],
        },
        {
            title: "Классификация эндометриоза",
            type: 'column',
            elem: [
                'Генитальный. Из самого названия следует, что при течении болезни в этой форме эндометриозные очаги располагаются в тканях детородных органов пациентки.',
                'Перитонеальный (брюшинный) эндометриоз - поражает яичники, брюшину малого таза, фаллопиевые трубы.',
                'Экстраперитонеальный (внебрюшнинный) эндометриоз возникает в органах не покрытых брюшиной: в нижних частях половых органов, вульве, в шейке матки (ее влагалищном сегменте), позадивагинальной перегородке и пр. В мускульном слое матки может сформироваться внутренний эндометриоз (аденомиоз), при этом матка обретает шаровидную форму и достигает величины до 5-6 недели беременности.',
                'Экстрагенитальный эндометриоз. При этой форме эндометриозные очаги находятся за пределами репродуктивной системы (пищеварительный тракт, дыхательная система, мочевыделительная система, послеоперационные рубцы).',
                'При серьезных, осложенных случаях болезни, эндометриоз бывает смешанный.'
            ],
        },
        {
            title: "В зависимости от глубины и распространения очагов эндометриоза различают 4 степени:",
            type: 'column',
            elem: [
                'I степень - поверхностные и единичные очаги;',
                'II степень - очаги более глубокие и в большем количестве;',
                'III степень - глубокие  множественные эндометриозные очаги, а также эндометриоидные кисты яичников, отдельные спайки брюшины;',
                'IV степень - множественные и глубокие очаги, большие эндометриоидные кисты обоих яичников, обширный спаечный процесс. Эндометрий может проростать в стенки вульвы и прямую кишку. Как правило, данная степень эндометриоза тяжело лечится, характеризуется масштабностью и степенью инвазии процесса.',
            ],
        },
        {
            title: "Симптомы эндометриоза:",
            type: 'column',
            elem: [
                'Тазовая боль. Возникает у 16-24% пациенток. Может иметь как точечную, так и разлитую локализацию, возникает и усиливается в корреляции от менструального цикла, может быть и постоянной. Зачастую она вызвана с воспалением и спаечным процессом, развивающимися при поражении эндометриозом.',
                'Дисменорея - боль во время менструации. Наиболее частая жалоба, которая доставляет больше всего страданий и дискомфорт, возникает у 40-60% женщин. Максимальный проявления выражены в первые несколько дней регул. Эндометриозные очаги часто кровоточат в полость кисты яичника, усиливая них давление, раздражая брюшину, вызывая сокращение гладкой мускулатуры маточных кровоснабжающих сосудов.',
                'Болезненный половой акт. Болезненность при опорожнении мочевого пузыря или прямой кишки. Наблюдается у 2-16% больных. При локализации эндометриозных очагов в органах малого таза в вульве, маточно-прямокишечно-вагинальной перегородки - может вызывать дискомфорт и даже боль во время полового акта или при опорожнении прямой кишки и мочевого пузыря. Эти симптомы могут также сопровождать аденомиоз и многие другие заболевания: миому матки, поликистоз яичников и др.',
                'Постгеморрагическая анемия. У 25-40% пациенток из-за значительной хронической кровопотери во время менструаций может возникнуть состояние малокровия. Посмтепенно нарастает слабость, бледность или желтушность кожных и слизистых покровов, головокружение, утомляемость, сонливостью раздражительность и психической возбудимостью.',
                'Бесплодие. Точно дать оценку тому, как и почему возникает бесплодие при поражении эндометриозом, ученые и врачи сегодня не в силах. Связывают это с процессами в придатках матки при эндометриозе, с перевоями в функционировании общего и местного иммунного статуса организма в целом, и как итог- сбои в овуляторных процессах. Не абсолютна, но достаточно высока при эндометриозе возможность не наступления беременности. Эндометриоз и сопутствующие ему процессы могу провоцировать самопроизовальные аборты, которые в свою очередь, кардинально и значительно сокращают шансы не только на наступление беременности, но и на нормальное ее течение. Поэтому беременные с эндометриозом в анамнезе должны постоянно наблюдаться у врача. 15-56% пролеченных от эндометриоза пациенток беременеют в течение 6-12 месяцев.',
                'Гинекологическое исследование (влагалищное, ректовагинальное, в зеркалах) наиболее информативно накануне менструации.'
            ],
        },
        {
            title: "Диагностика эндометриоза",
            type: 'text',
            elem: [
                'Кольпоскопию и гистеросальпингоскопию для получения биоптата из пораженных органов и уточнения места и формы очагов.',
            ],
        },
        {
            type: 'column',
            elem: [
                'УЗИ органов малого таза, брюшной полости для уточнения локализации и динамики при терапии эндометриоза;',
                'компьютерную томографию или магнитно - резонансную томографию для детализации характера, лоакализации образований и глубины поражения;',
                'лапароскопию, которая дает возможность визуализировать патологические процессы, оценить и х активность, количество, ползволяет определить степень зрелости;',
                'гистеросальпингографию (рентгенологическое исследование фаллопиевых труб и матки с введением контраста в их полости);',
                'гистероскопию (эндоскопическая визуализации полости матки), которая позволяет поставить диагноз - аденомиоз в 83% случаев;',
                'анализы крови на наличие онкомаркеров при эндометриозном процессе увеличиваются в разы: СА-125, РЭА и СА 19-9, РО-теста.'
            ],
        },
    ]
    const data2 = [
        {
            title: 'К основным методам диагностики климактерического периода относятся: ',
            type: 'column',
            elem: [
                'Рекомендуется проводить гормональное обследование  особенно, в случае неясного менопаузального статуса (уровень ФСГ в крови на 2-4 день менструального цикла;уровень эстрадиола в крови; уровень ТТГ в крови для дифференциальной диагностики заболеваний щитовидной железы; уровень пролактина в крови для дифференциальной диагностики нарушений менструального цикла).',
                'Биохимическое исследование показателей анализа крови и свертывающих факторов (коагулограмма).',
                'Рекомендуется при наличии переломов в анамнезе/ наличии факторов риска остеопороза проведение денситометрии (двухэнергетическая рентгеновская абсорбциометрия (ДЭРА) поясничного отдела позвоночника и шейки бедра ',
                'УЗИ органов малого таза;',
                'УЗИ молочных желез и маммографию;',
                'Цитологический анализ мазков из шейки матки и цервикального канала;'
            ],
        },
    ]

    return (
        <div>
            <InfoScreen
                title='ЭНДОМЕТРИОЗ'
                description1='ЭНДОМЕТРИОЗ - одно из самых часто встречаемых заболеваний женской репродуктивной системы; при его возникновнеии клетки эндометрия (слоя, выстилающего матку изнутри) разрастаются за его пределами.'
                description2=' Эндометриоз обнаруживается не только отделах репродуктивной системы, но и вне ее (брюшная стенка, мочевыделительная система, пищеварительный тракт, брюшина, легкие и пр.). Клинические проявления разнообразны и зависеть от расположения патологического процесса. Могут выражаться: болью, нарушениями менструального цикла (кровянистых выделений перед началом менструации, контактных кровянистых выделений).
                Бесплодие, нарушения менструации, поликистоз яичников могут быть следствием генитального эндометриоза. По исследовательским данным, каждое третье гинекологическое заболевание (исключая воспалительные заболевания и миомы) у женщины - это эндометриоз или патологический процесс, вызванный им.'
                img="cervix3"
                descriptionSize='body1'
            />
            <TextInfoScreen data={data1} />
            <ThreeScreen data={data2} showInfoText={true} />
            <LinkToSurveysScreen link="" />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <MyButton sx={{ bgcolor: '#EB5757', mb: 2 }}
                    onClick={() => {
                        navigate(cookie.get('jwttoken') ? '/surveys' : '/login')
                    }}
                >
                    <FormattedMessage id="view_surveys_lung_cancer" />
                </MyButton>
            </div>
            <MyContainer
                wrapper={false}
                minHeight={600}
            >
                <CaruselSurvey />
            </MyContainer>
        </div>
    )
}

export default Breath