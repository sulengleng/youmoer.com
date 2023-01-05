import { Grid } from "./Grid";
import { Cards } from "./Notebook/Cards";

export const Notebook = () => {
    return (
        <Grid className="max-w-[90%] mx-auto md:max-w-full rounded-lg md:mr-4">
            <Cards col={2} row={2} />
        </Grid>
    );
};
