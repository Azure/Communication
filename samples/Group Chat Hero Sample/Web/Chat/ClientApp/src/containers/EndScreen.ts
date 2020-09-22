import { connect } from 'react-redux';

import EndScreen from '../components/EndScreen';
import { State } from '../core/reducers/index';
import { addThreadMember } from '../core/sideEffects';

const mapDispatchToProps = (dispatch: any) => ({
  rejoinThread: () => dispatch(addThreadMember()),
});

export default connect(null, mapDispatchToProps)(EndScreen);
