import Card from "./Card/Card";
import { properties } from "../data/data";

export function Test() {
    return (
        <div className="App">
            <div className="properties">
                {properties.map((item) => (
                    <Card data={item} key={item.id} />
                ))}
            </div>
        </div>
    );
}