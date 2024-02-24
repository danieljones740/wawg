import { LatLng } from '../common/types';

type Props = {
    location: LatLng
};

export default function Location(props: Props) {

    const { location: { lat, lng } } = props;

    // TODO
    // - edit button
    // - delete button

    return (
        <div>
            <p>{ lat }, { lng }</p>
        </div>
    );
}
