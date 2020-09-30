import preval from 'preval.macro';

export const CAT = '🐱';
export const MOUSE = '🐭';
export const KOALA = '🐨';
export const OCTOPUS = '🐙';
export const MONKEY = '🐵';
export const FOX = '🦊';

export const getImage = (avatar: string, isSmall: boolean) => {
  let avatarType: string = '';
  switch (avatar) {
    case CAT:
      avatarType = 'cat';
      break;
    case MOUSE:
      avatarType = 'mouse';
      break;
    case KOALA:
      avatarType = 'koala';
      break;
    case OCTOPUS:
      avatarType = 'octopus';
      break;
    case MONKEY:
      avatarType = 'monkey';
      break;
    case FOX:
      avatarType = 'fox';
      break;
  }

  return `${isSmall ? '1' : '2'}x/${avatarType}.png`;
};
export const getBackgroundColor = (avatar: string) => {
  switch (avatar) {
    case CAT:
      return {
        backgroundColor: 'rgba(255, 250, 228, 1)'
      };
    case MOUSE:
      return {
        backgroundColor: 'rgba(33, 131, 196, 0.1)'
      };
    case KOALA:
      return {
        backgroundColor: 'rgba(197, 179, 173, 0.3)'
      };
    case OCTOPUS:
      return {
        backgroundColor: 'rgba(255, 240, 245, 1)'
      };
    case MONKEY:
      return {
        backgroundColor: 'rgba(255, 245, 222, 1)'
      };
    case FOX:
      return {
        backgroundColor: 'rgba(255, 231, 205, 1)'
      };
    default:
      return {
        backgroundColor: 'rgba(255, 250, 228, 1)'
      };
  }
};

export const getThreadId = () => {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('threadId');
};

export const getBuildTime = () => {
  const dateTimeStamp = preval`module.exports = new Date().toLocaleString();`;
  return dateTimeStamp;
};

export function getChatSDKVersion() {
  return require('../../package.json')['dependencies']['@azure/communication-chat'];
}

export const compareMessages = (firstMessage: any, secondMessage: any) => {
  if (firstMessage.createdOn === undefined) return 1;
  if (secondMessage.createdOn === undefined) return -1;
  const firstDate = new Date(firstMessage.createdOn).getTime();
  const secondDate = new Date(secondMessage.createdOn).getTime();
  return firstDate - secondDate;
};
