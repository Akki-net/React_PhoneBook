import React from 'react';

const Filter = ({ handler,val }) => <input className="form-control" onChange={handler} value={val} />

export default Filter;