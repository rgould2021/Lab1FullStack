import React from "react";
import Event from './Event';


const Calendar = () => {
  return (
    <div className="Calendar">
      <table>
        <thead>
          {/* Table row for headings */}
          <tr>
            <th></th>
            <th>Sunday</th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturday</th>
          </tr>
        </thead>
        <tbody>
          {/* Row 1 */}
          <tr>
            <td className="time">8 am</td>
            <Event event='Fancy Dinner 🎩' color='green' location='Maple & Ash'/>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          {/* Row 2 */}
          <tr>
            <td className="time">9 am</td>
            <Event event='Starbucks ☕️' color ='green' location = 'The Ave' />
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <Event event='Yolk 🍳' color ='green' location = 'North Federal'/>
            <td></td>
          </tr>
          {/* Row 3 */}
          <tr>
            <td className="time">10 am</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <Event event='Subway 🚊' color ='pink' location = 'Underground'/>
            <td></td>
          </tr>
          {/* Row 4 */}
          <tr>
            <td className="time">11 am</td>
            <td></td>
            <td></td>
            <td></td>
            <Event event='Subway 🚊' color ='pink' location = 'Underground'/>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          {/* Row 5 */}
          <tr>
            <td className="time">12 pm</td>
            <td></td>
            <td></td>
            <td></td>
            <Event event='Study Session 📚' color='blue' location ='The House'/>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          {/* Row 6 */}
          <tr>
            <td className="time">1 pm</td>
            <td></td>
            <td></td>
            <Event event='The Bean 🫘' color ='blue'/>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          {/* Additional Rows */}
          {/* Row 7 */}
          <tr>
            <td className="time">2 pm</td>
            {/* Add your events here */}
            <Event event='Celebrate🎉' color='purple' />
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          {/* Row 8 */}
          <tr>
            <td className="time">3 pm</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <Event event='Get Balloons 🎈' color='purple' />
          </tr>
          {/* Row 9 */}
          <tr>
            <td className="time">4 pm</td>
            <Event event='Party🎈' color='purple' />
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          {/* Row 10 */}
          <tr>
            <td className="time">5 pm</td>
            <Event event='Study Session 📚' color='blue' location="The House" />
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Calendar;
