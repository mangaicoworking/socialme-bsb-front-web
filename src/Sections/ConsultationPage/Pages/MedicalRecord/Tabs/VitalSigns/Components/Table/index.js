import React from 'react';

const Table = () => {
    return ( 
        <div className="table-responsive">
          <table className="table align-items-center table-flush">
            <thead className="thead-light">
              <tr>
                <th>Sinal Vital</th>
                <th></th>
                <th>10/03/2019</th>
                <th>05/03/2019</th>
                <th>19/11/2016</th>
                <th>20/03/2014</th>
                <th>27/07/2012</th>
                <th>27/07/2012</th>
              </tr>
            </thead>
            <tbody>

              <tr>
                <td>
                  <span className="text-muted">Pressão Arterial Diastólica</span>
                </td>
                <td>
                  <span><strong>mmHg</strong></span>
                </td>
                <td className="text-center">
                  <span className="text-muted">55</span>
                </td>
                <td className="text-center">
                  <span className="text-muted">88</span>
                </td>
                <td className="text-center">
                  <span className="text-muted">105</span>
                </td>
                <td className="text-center">
                  <span className="text-muted">83</span>
                </td>
                <td className="text-center">
                  <span className="text-muted">61</span>
                </td>
                <td className="text-center">
                  <span className="text-muted">67</span>
                </td>
              </tr>

              <tr>
                <td>
                  <span className="text-muted">Pressão Arterial Sistólica</span>
                </td>
                <td>
                  <span><strong>mmHg</strong></span>
                </td>
                <td className="text-center">
                  <span className="text-muted">113</span>
                </td>
                <td className="text-center">
                  <span className="text-muted">141</span>
                </td>
                <td className="text-center">
                  <span className="text-muted">159</span>
                </td>
                <td className="text-center">
                  <span className="text-muted">133</span>
                </td>
                <td className="text-center">
                  <span className="text-muted">113</span>
                </td>
                <td className="text-center">
                  <span className="text-muted">123</span>
                </td>
              </tr>

              <tr>
                <td>
                  <span className="text-muted">Pulso</span>
                </td>
                <td>
                  <span><strong>bpm</strong></span>
                </td>
                <td className="text-center">
                  <span className="text-muted">91</span>
                </td>
                <td className="text-center">
                  <span className="text-muted">102</span>
                </td>
                <td className="text-center">
                  <span className="text-muted">114</span>
                </td>
                <td className="text-center">
                  <span className="text-muted">100</span>
                </td>
                <td className="text-center">
                  <span className="text-muted">77</span>
                </td>
                <td className="text-center">
                  <span className="text-muted">74</span>
                </td>
              </tr>

              <tr>
                <td>
                  <span className="text-muted">Temperatura</span>
                </td>
                <td>
                  <span><strong>ºC</strong></span>
                </td>
                <td className="text-center">
                  <span className="text-muted"></span>
                </td>
                <td className="text-center">
                  <span className="text-muted"></span>
                </td>
                <td className="text-center">
                  <span className="text-muted"></span>
                </td>
                <td className="text-center">
                  <span className="text-muted">36.6</span>
                </td>
                <td className="text-center">
                  <span className="text-muted">36.6</span>
                </td>
                <td className="text-center">
                  <span className="text-muted">35.9</span>
                </td>
              </tr>

            </tbody>
          </table>
        </div>
     );
}
 
export default Table;