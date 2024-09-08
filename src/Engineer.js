import { engineers } from './apitest';
import './index.css';
export default function Engineer() {
    // Filter the engineers array outside of JSX
    const filteredEngineers = engineers.filter((e) => e.type === "software");

    return (
        <>
        <p style={{
           textAlign:'center',
           fontWeight:'900',
           fontSize:'3rem'
        }}>Engineer's data</p>

            {filteredEngineers.map((engineer) => (
                <table key={engineer.id } className="devdiv">
                    <tr>
                    <td style={{border:'1px solid red'}}><i>{engineer.name}</i></td>
                    <td><b>{engineer.type}</b></td>
                    </tr>
                </table>
            ))}
        </>
    );
}
