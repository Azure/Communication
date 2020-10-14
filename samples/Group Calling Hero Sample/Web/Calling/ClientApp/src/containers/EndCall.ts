import { connect } from 'react-redux';
import { State } from '../core/reducers';
import EndCall, { EndCallProps } from '../components/EndCall';
import { joinGroup } from '../core/sideEffects';

const mapStateToProps = (state: State, props: EndCallProps) => ({
  joinGroup: () => {
    state.calls.callAgent &&
      joinGroup(
        state.calls.callAgent,
        {
          groupId: state.calls.group
        },
        {
          audioOptions: { muted: !state.controls.mic }
        }
      );
  },
  rejoinHandler: props.rejoinHandler,
  homeHandler: props.homeHandler
});

const connector: any = connect(mapStateToProps, undefined);
export default connector(EndCall);
