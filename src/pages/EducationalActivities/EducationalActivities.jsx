import React from 'react';
import s from './EducationalActivities.module.scss';
import {Outlet} from "react-router-dom";

const EducationalActivities = () => {
    return (
        <div className={s.educationalActivities}>
            <div className={s.links}>
                <a href="/educationalActivities">Учебная деятельность</a>
                <a href="/educationalActivities">Нормативные документы</a>
                <a href="/educationalActivities">ЕГЭ</a>
            </div>
            <div className={s.list}>
                <p> Учебная деятельность – это один из видов деятельности обучающихся, направленный на усвоение теоретических знаний и способствующий интенсивному развитию мышления. (В трактовке Д.Б. Эльконина и В.В. Давыдова)</p>
                <p>Предметом учебной деятельности, т.е. тем, на что она направлена, являются прежде всего усвоение знаний, овладение обобщенными способами действий, отработка приёмов и способов действий, их программ и алгоритмов, в процессе чего развивается сам обучающийся.</p>
            </div>
        </div>
    )
}

export default EducationalActivities;