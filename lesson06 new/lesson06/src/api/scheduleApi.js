import { API_BASE_URL } from "../api/constants";

export const scheduleApi = {
  getAllSchedules() {
    return fetch(API_BASE_URL).then(res => {
      if (!res.ok) throw new Error("Failed to fetch schedules");
      return res.json();
    });
  },
  getScheduleByDate(date) {
    return fetch(`${API_BASE_URL}/${date}`).then(res => {
      if (!res.ok) throw new Error(`Failed to fetch schedule for ${date}`);
      return res.json();
    });
  },
  updateCheckedStatus(date, time, checked) {
    return fetch(API_BASE_URL, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ date, time, checked })
    }).then(res => {
      if (!res.ok) throw new Error("Failed to update checked status");
      return res.json();
    });
  },
  deleteTodo(date, time) {
    return fetch(API_BASE_URL, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ date, time })
    }).then(res => {
      if (!res.ok) throw new Error("Failed to delete todo");
      return res.json();
    });
  },
  addTodo(date, time, text) {
    return fetch(`${API_BASE_URL}/${date}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ time, text, checked: false })
    }).then(res => {
      if (!res.ok) throw new Error("Failed to add todo");
      return res.json();
    });
  }
};
