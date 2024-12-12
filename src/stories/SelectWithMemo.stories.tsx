import React, {ChangeEvent, useCallback, useMemo, useState} from "react";
import {v1} from "uuid";

export default {
    title: 'Select With Memo',
}

//Сделать три селекта с фильтрацией (Страна, название на определенную букву, численность населения)
// Добавить счетчик, который не перерисовывает компонент с фильтрацией

type CityType = {
    title: string
    country: string
    population: number
    id: string
}

type SelectPropsType = {
    cities: CityType[]
    getFilter: (value: string) => void
    filter: string
}

type SheetOfCitiesPropsType = {
    filteredCities: CityType[]
    cities: CityType[]
    getFilter: (value: string) => void
    filter: string
}

export const SelectWithMemo = () => {
    const [filter, setfilter] = useState('All')
    const [filterPopulation, setFilterPopulation] = useState('All')

    const [cities, setCities] = useState<CityType[]>([
        {title: 'Kislovodsk', country: 'Russia', population: 120000, id: '1'},
        {title: 'Moscow', country: 'Russia', population: 20000000, id: '2'},
        {title: 'Cherkessk', country: 'Turkey', population: 150000, id: '3'},
        {title: 'Istanbul', country: 'Turkey', population: 15000000, id: '4'},
        {title: 'Berlin', country: 'Germany', population: 8000000, id: '5'},
        {title: 'Munich', country: 'Germany', population: 5000000, id: '6'},
    ])

    const getFilter = useCallback((value: string) => setfilter(value), [])

    const filteredCities = useMemo(()=> {
       return filter === 'All' ? cities : cities.filter(city => city.country === filter)
    }, [cities, filter])

    return (
        <div style={{display: 'flex', gap: '20px'}}>
            <MemoizedSheetOfCities
                filter={filter}
                filteredCities={filteredCities}
                cities={cities}
                getFilter={getFilter}
            />
            <MemoizedSheetOfCities
                filter={filterPopulation}
                filteredCities={filteredCities}
                cities={cities}
                getFilter={getFilter}
            />
        </div>
    )
}

const Select = (props: SelectPropsType) => {
    const arrOfCountries = ['All', ...new Set(props.cities.map(item => item.country))]

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        props.getFilter(e.target.value)
    }

    return (
        <select onChange={onChangeHandler} value={props.filter}>
            {arrOfCountries.map((item, index) => <option value={item} key={index}>{item}</option>)}
        </select>
    )
}

const SheetOfCities = (props: SheetOfCitiesPropsType) => {
    return (
        <div>
            <div>
                <span>Country</span>
                <Select cities={props.cities} filter={props.filter} getFilter={props.getFilter}/>
            </div>
            <table>
                <thead>
                <tr>
                    <th>City</th>
                    <th>Country</th>
                    <th>Population</th>
                </tr>
                </thead>
                <tbody>
                {props.filteredCities.map((city) => {
                    return (
                        <tr>
                            <td>{city.title}</td>
                            <td>{city.country}</td>
                            <td>{city.population}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    )
}

const MemoizedSheetOfCities = React.memo(SheetOfCities);