import { useParams } from "react-router-dom";

const Library = () => {
	const { wordId } = useParams();
	return (
		<>
			<h1>This is THE Library</h1>
			{wordId ? <h4>Showing word id {wordId}</h4> : null}
		</>
	);
};

export default Library;
