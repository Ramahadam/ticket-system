function TableBody({ data, render }) {
	return <tbody>{data?.map(render)}</tbody>;
}

export default TableBody;
