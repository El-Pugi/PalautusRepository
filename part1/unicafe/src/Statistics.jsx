import StatisticsLine from "./StatisticsLine";

export default function Statistics({good, neutral, bad, all}){
    if (all === 0){
        return <p>No feedback given</p>
    }

    const average = (good - bad) / all;
    const positive = (good / all) * 100;

    return (
        <table>
          <tbody>
            <StatisticsLine text="good" value={good} />
            <StatisticsLine text="neutral" value={neutral} />
            <StatisticsLine text="bad" value={bad} />
            <StatisticsLine text="all" value={all} />
            <StatisticsLine text="average" value={average} />
            <StatisticsLine text="positive" value={positive} />
          </tbody>
        </table>
      );
    };