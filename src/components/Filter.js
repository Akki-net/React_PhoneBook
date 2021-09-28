import React from 'react';

const Filter = ({ handler,val }) => <input onChange={handler} value={val} />

export default Filter;