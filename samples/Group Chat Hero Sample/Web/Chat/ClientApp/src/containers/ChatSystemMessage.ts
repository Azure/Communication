import { connect } from 'react-redux';

import { State } from '../core/reducers/index';
import ChatSystemMessage from '../components/ChatSystemMessage';
import { COOL_PERIOD_THRESHOLD } from '../constants';

const mapStateToProps = (state: State) => ({
  generateCoolPeriod: () => {
    let currentContosoUser = state.contosoClient.user;
    if (currentContosoUser.coolPeriod === undefined) return '';
    let waitTime = new Date().getTime() - currentContosoUser.coolPeriod.getTime();
    if (waitTime < COOL_PERIOD_THRESHOLD) {
      return `Warning: You send too many messages in a short period. Please wait ${Math.ceil(
        60 - waitTime / 1000
      )} seconds to send new messages`;
    }
    return '';
  }
});

export default connect(mapStateToProps)(ChatSystemMessage);
