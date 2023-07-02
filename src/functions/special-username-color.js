/**
 * special username color
 */
export function specialUsernameColor(messageUserList) {
  messageUserList.forEach((message) => {
    const messageElement = document.getElementById(message.id);
    if (!messageElement) {
      return;
    }
    const messageUsername = messageElement.querySelector('.vac-message-container .vac-message-card .vac-text-username');
    if (!messageUsername) {
      return;
    }
    const color = calculateColor(message.name);
    const messageUsernameSpan = messageUsername.querySelector('span:first-child');
    if (messageUsernameSpan) {
      messageUsernameSpan.style.color = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
    }
  })
}

function calculateColor(qqID) {
  const number = qqID.toString().replace(/\D/g, '');

  // 进行一系列复杂的计算操作
  const calculationResult1 = performCalculation(number, 1);
  const calculationResult2 = performCalculation(number, 2);
  const calculationResult3 = performCalculation(number, 3);

  // 将计算结果映射到0到255的范围
  const mappedValue1 = mapToRange(calculationResult1, 0, 1000, 30, 205);
  const mappedValue2 = mapToRange(calculationResult2, 0, 1000, 30, 205);
  const mappedValue3 = mapToRange(calculationResult3, 0, 1000, 30, 205);

  // 将映射后的值分配给RGB颜色空间的相应分量
  const redComponent = Math.abs(mappedValue1 + 80);
  const greenComponent = Math.abs(mappedValue2 + 80);
  const blueComponent = Math.abs(mappedValue3 + 80);

  // 返回RGB颜色值
  return [redComponent, greenComponent, blueComponent];
}

function performCalculation(number, operation) {
  // 在这里执行更复杂的计算操作
  if (operation === 1) {
    return Math.sin(number) * 500;
  } else if (operation === 2) {
    return Math.cos(number) * 300;
  } else if (operation === 3) {
    return Math.tan(number) * 200;
  } else {
    return 0;
  }
}

function mapToRange(value, inMin, inMax, outMin, outMax) {
  // 将值从输入范围映射到输出范围
  return Math.abs(((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin);
}