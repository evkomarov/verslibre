function moveTank(roadMines) {
  let damage = 0;
  let Message = "";
  tankTrack: for (i = 0; i < roadMines.length; i++) {
    if (i == 0 && roadMines[0] == false) {
      Message = `Танк начал движение`;
    }
    else
      if (roadMines[i] == true && damage == 0) {
        damage += 1;
        if (i == 0) {
          Message = `Танк наехал на мину на клетке No ${parseInt(i) + 1}`;
        } else {
          Message = `Танк наехал на мину на клетке No ${parseInt(i) + 1}`;
        }
      }
    else
      if (roadMines[i] == true && damage == 1) {
        Message = `Танк наехал на вторую мину, танк повреждён бесповоротно`;
        console.log(Message);
        break tankTrack;
      }
    else {
      Message = `Танк переместился на клетку No ${parseInt(i) + 1}`;
    }
    console.log(Message);
  }
}

// вызов функции
moveTank([false, false, true, false, false, false, true, false, false, true]);
moveTank([false, false, false, false, false, false, false, false, false, false]);
moveTank([true, true, false, false, false, false, true, false, false, true]);

// строка ниже необходима, чтобы работало автоматическое тестирование
// не изменяйте этот код!
export default moveTank;
