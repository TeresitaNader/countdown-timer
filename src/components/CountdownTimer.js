import React, { useState, useEffect } from 'react';
import './CountdownTimer.css';

const CountdownTimer = () => {
    const calculateTimeLeft = () => {
        const difference = +new Date('2024-01-01') - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                Days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                Hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                Minutes: Math.floor((difference / 1000 / 60) % 60),
                Seconds: Math.floor((difference / 1000) % 60),
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    const timerComponents = [];

    Object.keys(timeLeft).forEach((interval) => {
        if (!timeLeft[interval]) {
            return;
        }

        timerComponents.push(
            <div className='box' key={interval}>
                <div className='value'>
                    <span>{timeLeft[interval]}</span>
                </div>
                <span className='label'>{interval}</span>
            </div>
        );
    });

    return (
        <div className="Countdown" data-testid="countdown-timer">
            <div className='content'>
                {timerComponents.length ? timerComponents : <span>Happy New Year!</span>}
            </div>
        </div>
    );
};

export default CountdownTimer;
