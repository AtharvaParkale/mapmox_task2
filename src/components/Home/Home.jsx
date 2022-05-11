import React, { useEffect, useState, PureComponent } from 'react'
import "./Home.css"
import Data from '../../data.json';
import Navbar from '../Navbar/Navbar';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,LineChart, ResponsiveContainer,Line, ComposedChart} from 'recharts';

function Home() {
  const [person, setPerson] = useState(" ")
  const [flag, setFlag] = useState(true)
  const selectedPerson = (x) => {
    setPerson(x);
  }
  const rada = (y) => {
    console.log(y);
  }

  useEffect(() => {
    selectedPerson(person);
  }, [person])

  return (
    <>
      <Navbar flag={true} />
      <div className="search_container">
        {flag ?
          <div className="search_tools">
            <h1>Get your report here!</h1>



            <div className="search_kit">
              <select name="names" id="select_name" className="select_tag" onChange={(e) => {

                selectedPerson(e.target.value);
              }}>
                {
                  Data.map((option_name) => {

                   
                    return (
                      <option value={option_name.Name}>{option_name.Name}</option>
                    )
                    
                  })
                }
              </select>
              <button onClick={() => {
                console.log(person);
                flag ? setFlag(false) : setFlag(true);
              }}>Get report</button>
            </div>

          </div> :

          <div className="graph_container">

            {
              Data.map((option_name) => {

                if (person === `${option_name.Name}`) {
                  const data = [
                    {
                      name: "Warmth",
                      value: option_name.Warmth,
                      ideal:4
                    },
                    {
                      name: "Reasoning",
                      value: option_name.Reasoning,
                      ideal:0
                    },
                    {
                      name: "Emotional Stability",
                      value: option_name['Emotional Stability'],
                      ideal:0
                    },
                    {
                      name: "Dominance",
                      value: option_name.Dominance,
                      ideal:4
                    },
                    {
                      name: "Liveliness",
                      value: option_name.Liveliness,
                      ideal:0
                    },
                    {
                      name: "Rule Conciousness",
                      value: option_name['Rule Conciousness'],
                      ideal:4
                    },
                    {
                      name: "Social Boldness",
                      value: option_name['Social Boldness'],
                      ideal:4
                    },
                    {
                      name: "Sensitivity",
                      value: option_name.Sensitivity,
                      ideal:0
                    },
                    {
                      name: "Vigilance",
                      value: option_name.Vigilance,
                      ideal:0
                    },
                    {
                      name: "Abstractedness",
                      value: option_name.Abstractedness,
                      ideal:0
                    },
                    {
                      name: "Privateness",
                      value: option_name.Privateness,
                      ideal:4
                    },
                    {
                      name: "Apprehension",
                      value: option_name.Apprehension,
                      ideal:0
                    },
                    {
                      name: "Openness to change",
                      value: option_name['Openness to change'],
                      ideal:4
                    },
                    {
                      name: "Self Reliance",
                      value: option_name['Self Reliance'],
                      ideal:4
                    },
                    {
                      name: "Perfectionism",
                      value: option_name.Perfectionism,
                      ideal:4
                    },
                    {
                      name: "Tension",
                      value: option_name.Tension,
                      ideal:0
                    },
                  ];
                  


                  const CustomTooltip = ({ active, payload, label }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="custom-tooltip">
                          <p className="label">{`${label} : ${payload[0].value}`}</p>
                        </div>
                      );
                    }

                    return null;
                  };
                  return (
                    <>
                      <div className="graph_head">
                        <p>Hello, <span> {option_name.Name} </span> this is your report !</p>
                        <button onClick={()=>{
                          flag?setFlag(false):setFlag(true);
                        }}>Go back</button>
                      </div>
                      <ResponsiveContainer width="100%" height="100%">

                        <ComposedChart
                          width={500}
                          height={300}
                          data={data}
                          margin={{
                            top: 50,
                            right: 70,
                            left: 10,
                            bottom: 100,
                          }}
                        >
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="name"
                            style={{
                              fontSize: '0.9rem',

                            }}
                          />
                          <YAxis />
                          <Tooltip content={<CustomTooltip />} />
                          <Legend />
                          <Bar dataKey="value" barSize={40} fill="#FF7700" />
                          <Line type="monotone" dataKey="ideal" stroke="#2A2550" strokeWidth={1.8} />
                        </ComposedChart>
                      </ResponsiveContainer>
                    </>

                  )
                }
              })
            }

          </div>
        }
      </div>
      {/* <Line data={data}/> */}
      <Navbar flag={false} />
    </>
  )
}

export default Home