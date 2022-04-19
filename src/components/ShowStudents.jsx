import { getValue } from "@testing-library/user-event/dist/utils";
import { useEffect,useState } from "react";
export const ShowStudents = () => {
   
//    const [studentsdata,showdata] = useState([])
//    useEffect(()=>{
//         fetch("http://localhost:8080/students").then(d)=>d.json().then((data)=>{
//             data.sort((a,b)=>{
//                 const nameA=a.first_name.toUpperCase();
//                 const nameB=b.first_name.toUpperCase();
//                 if(nameA < nameB){
//                     return -1
//                 }
//                 if(nameA > nameB){return 1}
//             })
//             showdata(data)
//         });
//    },[]);

    return (
      <div>
        <div className="controls">
          <div>
            Sort By:{" "}
            <select
              // select dropdown needs both value and onChange
              className="sortby"
            >
              <option value="first_name">First Name</option>
              <option value="gender">Gender</option>
              <option value="age">Age</option>
              <option value="tenth_score">10th Score</option>
              <option value="twelth_score">12th Score</option>
            </select>
          </div>
          <div>
            Order:
            <select
              // select dropdown needs both value and onChange
              className="sortorder"
            >
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
          </div>
          <button className="sort">sort</button>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Age</th>
              <th>10th Score</th>
              <th>12th Score</th>
              <th>Branch</th>
            </tr>
          </thead>
          <tbody className="tbody">
//             {studentsdata.map((e)=>{
                return <tr className="row">
              <td className="first_name">xyz</td>
              <td className="last_name">xyc</td>
              <td className="email">hcchc</td>
              <td className="gender">male</td>
              <td className="age">30td>
              <td className="tenth_score">67td>
              <td className="twelth_score">90td>
              <td className="preferred_branch">science
            </tr>
//             })}
          </tbody>
        </table>
      </div>
    );
  };
