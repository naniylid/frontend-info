import React from 'react';
import { useLocation } from 'react-router-dom';
import { Navigation } from '../components/Navigation/Navigation';
import { Header } from '../components/Header/Header';
import { StudyPlan } from '../components/StudyPlan';
import { Recommendations } from '../components/Recommendations';
import numbers from '../assets/image/numbers.svg';
import { Ideas } from '../components/Ideas/Ideas';
import { JobSearch } from '@/components/JobSearch/JobSearch';

const Home: React.FC = () => {
    const location = useLocation();

    React.useEffect(() => {
        if (location.hash) {
            const element = document.getElementById(location.hash.substring(1));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);
    return (
        <>
            <Navigation />
            <img className='numbers' src={numbers} alt='' />
            <Header />
            <StudyPlan />
            <Recommendations />
            <Ideas />
            <JobSearch />
        </>
    );
};

export default Home;
