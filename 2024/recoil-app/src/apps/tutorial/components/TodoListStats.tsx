// components/TodoListStats.tsx
import { useRecoilValue } from "recoil";
import { todoListStatsState } from "../libs/atoms";

export default function TodoListStats() {
  const {
    totalNum,
    totalCompletedNum,
    totalUncompletedNum,
    percentCompleted,
    allText,
  } = useRecoilValue(todoListStatsState);
  const formattedPercentCompleted = Math.round(percentCompleted * 100);

  return (
    <ul>
      <li>Total items: {totalNum}</li>
      <li>Items completed: {totalCompletedNum}</li>
      <li>Items not completed: {totalUncompletedNum}</li>
      <li>Percent completed: {formattedPercentCompleted}</li>
      <li>Text not completed: {allText}</li>
    </ul>
  );
}
