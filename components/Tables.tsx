const Table = ({ rows, headers, textStyle }: any) => {
  return (
    <table style={{borderCollapse: 'collapse', marginLeft: '5.3464pt', ...textStyle}} cellSpacing={0}>
      <tbody>
        <tr style={{height: '15pt'}}>
          { headers.map((header: any, key: number) => (
            <>
              { key === 0 && <td style={{width: '103pt', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#231F20'}}>
                <p className="s4" style={{paddingTop: '2pt', paddingLeft: '3pt', textIndent: '0pt', textAlign: 'left'}}>{header}</p>
              </td> }
              { (key > 0 && key != headers.length-1) && <td style={{width: '128pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#231F20', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#231F20'}}>
                <p className="s4" style={{paddingTop: '2pt', paddingLeft: '3pt', textIndent: '0pt', textAlign: 'left'}}>{header}</p>
              </td> }
              { key == headers.length -1 && <td style={{width: '103pt', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#231F20', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20'}}>
                <p className="s4" style={{paddingTop: '2pt', paddingLeft: '3pt', textIndent: '0pt', textAlign: 'left'}}>{header}</p>
              </td> }
            </>
          ))}
        </tr>
        { rows.map((row: any, key: number) => ( <>
          { key < rows.length-1 && 
            <tr style={{height: '15pt'}}>
              { row.map((cell: any, j: number) => (
                <>
                  { j === 0 && <td style={{width: '103pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#231F20'}}>
                    <p className="s5" style={{paddingTop: '2pt', paddingLeft: '3pt', textIndent: '0pt', textAlign: 'left'}} dangerouslySetInnerHTML={{__html: cell}}></p>
                  </td> }
                  { (j > 0 && j !== row.length-1) && <td style={{width: '128pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#231F20', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#231F20'}}>
                    <p className="s5" style={{paddingTop: '2pt', paddingLeft: '3pt', textIndent: '0pt', textAlign: 'left'}} dangerouslySetInnerHTML={{__html: cell}}></p>
                  </td> }
                  { j == row.length-1 && <td style={{width: '103pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#231F20', borderBottomStyle: 'solid', borderBottomWidth: '1pt', borderBottomColor: '#231F20'}}>
                    <p className="s6" style={{paddingTop: '2pt', paddingLeft: '3pt', textIndent: '0pt', textAlign: 'left'}} dangerouslySetInnerHTML={{__html: cell}}></p></td>
                  }
                </>
              ))}
              </tr>
          }
          { key == rows.length-1 && <tr style={{height: '15pt'}}>
            { row.map((cell: any, j: number) => (
              <>
              { j === 0 && <td style={{width: '103pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#231F20'}}>
                  <p className="s5" style={{paddingTop: '2pt', paddingLeft: '3pt', textIndent: '0pt', textAlign: 'left'}} dangerouslySetInnerHTML={{__html: cell}}></p>
                </td>
              }
              { (j > 0 && j !== row.length-1) && <td style={{width: '128pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#231F20', borderRightStyle: 'solid', borderRightWidth: '1pt', borderRightColor: '#231F20'}}>
                <p className="s5" style={{paddingTop: '2pt', paddingLeft: '3pt', textIndent: '0pt', textAlign: 'left'}} dangerouslySetInnerHTML={{__html: cell}}></p>
                </td>
              }
              { j == row.length -1 && <td style={{width: '103pt', borderTopStyle: 'solid', borderTopWidth: '1pt', borderTopColor: '#231F20', borderLeftStyle: 'solid', borderLeftWidth: '1pt', borderLeftColor: '#231F20'}}>
                <p className="s6" style={{paddingTop: '2pt', paddingLeft: '3pt', textIndent: '0pt', textAlign: 'left'}} dangerouslySetInnerHTML={{__html: cell}}></p>
                </td>
              }
              </>
            ))}
          </tr>
          }
        </>
        ))}
      </tbody>
    </table>
  );
}

export default Table