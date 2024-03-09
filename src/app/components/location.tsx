import { LatLng } from '../common/types';
import styles from './styles/location.module.scss';

type Props = {
    location: LatLng;
    editing: boolean;
    onEdit: () => void;
    onDelete: () => void
};

export default function Location({ location, editing, onEdit, onDelete }: Props) {

    const { lat, lng } = location;

    const contents = editing
        ? <input type="text" /> // TODO
        : <p>{ lat }, { lng }</p>

    const controls = <div className={ styles.controls }>
        <button onClick={ onEdit }>Edit</button>
        <button onClick={ onDelete }>Delete</button>
    </div>;

    return (
        <div className={ styles.location }>
            { contents }
            { editing ? undefined : controls }
        </div>
    );
}
