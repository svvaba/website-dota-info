import React from 'react';
import classNames from 'classnames';

const TeamIdLatestMatchesBox= ({latestMatches})=> {

  let showmatches= latestMatches.map((item,index)=> {
    let matchcontainerclass= classNames({
      'Latest-match-container': true,
      'Uneven-row': index%2===0,
    })
    let result;
    if (item.radiant === item["radiant_win"]) {
      result= <div className="TeamId-result Win">Win</div>} else {
      result =<div className="TeamId-result Loss">Loss</div>
    }

    return (
      <div className={matchcontainerclass}>
        {result} <span> VS </span>
        <div className="Opposing-team-teamId"> {item["opposing_team_name"]} <img src={item["opposing_team_logo"]} className="Opposing-team-logo-teamId"></img> </div>
       </div>
    )
  })

  if (latestMatches.length===0) return <div className="Team-no-matches-box"> No matches found</div>
  else {
    return <div className="Team-with-players-box">{showmatches}</div>
  }
}

export default TeamIdLatestMatchesBox