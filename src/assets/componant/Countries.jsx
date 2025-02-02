import React, { useEffect, useState } from 'react';
import Country from './Country';
import CountryMod from './CountryMod';
import SearchCountry from './SearchCountry';
import PG from '../utilities/PG';
import Select from './Select';



const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [filteredCountry, setFilteredCountry] = useState([]);
    const [filterText , setFilterText] = useState('');
    const [searched, setSearched] = useState(false);

    
    console.log(countries); 
    useEffect(() => {
         fetch('https://restcountries.com/v3.1/all')
         .then((response) => response.json())
         .then((data) => {
            setCountries(data)
            setFilteredCountry(data);
        })
    },[])

    const singleCountryHandler = (country) => {
          setSelectedCountry(country);
    };

    const searchHandler =() => {
        const filtered = countries.filter(country=> country.name.common.toLowerCase().includes(filterText.toLowerCase()))

        setFilteredCountry(filtered);
        setSearched(true);
    }
    const cancelHandler = () => {
          setFilterText('');
          setSearched(false);
          setFilteredCountry(countries); 
    }
    const modalHandler = () => {

            setSelectedCountry(null);
    }
    const continentHandler = () => {
        if (!filterText) {
            setFilterText(countries);
            return
        }
        else {
            if (typeof filterText === 'string') {
                
                const filterContinent = countries.filter(country=>
                country.continents.some(continent=>
                continent.toLowerCase() === filterText.toLowerCase()));
                setFilteredCountry(filterContinent);
                setSearched(true);
            }
        }
    };


    
    return (
        <div className='w-full bg-blue-800 py-9 mt-5 min-h-screen relative -z-2'>
            <Select 
                selectContinent={filterText}
                setSelectedContinent={setFilterText}
                selectAction={continentHandler}
            />
            <SearchCountry
                targetValue={filterText} 
                setTargetValue={setFilterText} 
                onTarget={searchHandler}
                onClean={cancelHandler}
                />
            <div className='w-11/12 mx-auto flex flex-wrap flex-col bg-sky-600/40 bg-opacity-55 py-3 shadow-md rounded-md'>
                {searched&&(
                    <PG type={'p'} 
                        className={`text-center font-black text-2xl `}
                        text={`${filteredCountry.length=== 0 ? 'No countries found matching your search.' : `${filteredCountry.length} ${filteredCountry.length>1 ? 'countries' : 'country'} found.`}`} />
                )}
                <div className='w-full flex flex-wrap items-center gap-6 justify-center'>

                    {filteredCountry.map((country, index)=>( <Country key={country.cca3}
                     index={index} country={country} onOpen={()=>singleCountryHandler(country)}
                     /> ))}
                </div>
            </div>            
            
            
            {selectedCountry && (  
               
                    <CountryMod country={selectedCountry} onClick={modalHandler} />
             )}
             
        </div>
    );
};

export default Countries;  