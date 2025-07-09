import { useState, useEffect, useMemo } from "react";
import { scheduleApi } from "../api/scheduleApi";
import { DEFAULT_TIME } from "../api/constants";

export const useSchedules = () => {
  const [schedules, setSchedules] = useState(null);
  const [selectedSchedule, setSelectedSchedule] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const sortedSchedules = useMemo(() => {
    return schedules?.slice().sort((a, b) => new Date(a.date) - new Date(b.date));
  }, [schedules]);

  const loadData = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await scheduleApi.getAllSchedules();
      setSchedules(data);
      setSelectedSchedule(data.length > 0 ? data[0] : null);
    } catch (err) {
      setError(err.message);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const selectScheduleByDate = async (date) => {
    try {
      setLoading(true);
      setError(null);
      const data = await scheduleApi.getScheduleByDate(date);
      data?.todos.sort((a, b) => a.time.localeCompare(b.time));
      setSelectedSchedule(data);
    } catch (err) {
      setError(err.message);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const updateCheckedStatus = async (time, currentChecked) => {
    if (!selectedSchedule) return;
    try {
      setLoading(true);
      setError(null);
      await scheduleApi.updateCheckedStatus(selectedSchedule.date, time, currentChecked);
      const updatedTodos = selectedSchedule.todos.map(item =>
        item.time === time ? { ...item, checked: !item.checked } : item
      );
      const updated = { ...selectedSchedule, todos: updatedTodos };
      setSelectedSchedule(updated);
      setSchedules(prev => prev.map(s => s.date === selectedSchedule.date ? updated : s));
    } catch (err) {
      setError(err.message);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const deleteTodo = async (time) => {
    if (!selectedSchedule) return;
    try {
      setLoading(true);
      setError(null);
      await scheduleApi.deleteTodo(selectedSchedule.date, time);
      const filtered = selectedSchedule.todos.filter(item => item.time !== time);
      let updatedSchedules;
      if (filtered.length === 0) {
        updatedSchedules = schedules.filter(s => s.date !== selectedSchedule.date);
        setSelectedSchedule(null);
      } else {
        const updated = { ...selectedSchedule, todos: filtered };
        updatedSchedules = schedules.map(s => s.date === selectedSchedule.date ? updated : s);
        setSelectedSchedule(updated);
      }
      setSchedules(updatedSchedules);
    } catch (err) {
      setError(err.message);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const deleteAllTodos = async (date) => {
    if (!selectedSchedule) return;
    try {
      setLoading(true);
      setError(null);
      await scheduleApi.deleteTodo(date);
      const updated = schedules.filter(s => s.date !== date);
      setSchedules(updated);
      setSelectedSchedule(null);
    } catch (err) {
      setError(err.message);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const addTodo = async (date, time, text) => {
    try {
      setLoading(true);
      setError(null);
      await scheduleApi.addTodo(date, time, text);
      const newTodo = { time, text, checked: false };
      const exists = schedules.find(s => s.date === date);
      let updatedSchedules = [];
      let updatedSelected = null;

      if (!exists) {
        const newSched = { date, todos: [newTodo] };
        updatedSchedules = [...schedules, newSched];
        updatedSelected = newSched;
      } else {
        const updated = {
          ...exists,
          todos: [...exists.todos, newTodo].sort((a, b) => a.time.localeCompare(b.time))
        };
        updatedSchedules = schedules.map(s => s.date === date ? updated : s);
        updatedSelected = updated;
      }
      setSchedules(updatedSchedules);
      setSelectedSchedule(updatedSelected);
    } catch (err) {
      setError(err.message);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { loadData(); }, []);

  return {
    schedules,
    selectedSchedule,
    sortedSchedules,
    loading,
    error,
    selectScheduleByDate,
    updateCheckedStatus,
    deleteTodo,
    deleteAllTodos,
    addTodo
  };
};