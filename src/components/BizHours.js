import React from 'react'
import '../components/BizHours.css'


export default function BizHours(props) {
  return (
    <div className='hoursTableWrap'>
      <div className='hoursTable'>
          <table>
              <tr><th>Monday</th><td>{props.mon}</td></tr>
              <tr><th>Tuesday</th><td>{props.tues}</td></tr>
              <tr><th>Wednesday</th><td>{props.weds}</td></tr>
              <tr><th>Thursday</th><td>{props.thurs}</td></tr>
              <tr><th>Friday</th><td>{props.fri}</td></tr>
              <tr><th>Saturday</th><td>{props.sat}</td></tr>
              <tr><th>Sunday</th><td>{props.sun}</td></tr>
          </table>
      </div>
    </div>
  )
}
