import { createSlice } from "@reduxjs/toolkit";

const iniciateState = {
  userActive: {},
  userAppointments: [],
};

export const userSlice = createSlice({
  name: "userData",
  initialState: iniciateState,
  reducers: {
    setUserActive: (state, action) => {
      state.userActive = action.payload;
    },
    setUserAppointments: (state, action) => {
      state.userAppointments = action.payload;
    },
    removeUser: (state) => {
      state.userActive = {};
    },
    cancelAppointmentAction: (state, action) => {
      state.userAppointments = state.userAppointments.map((appointment) => {
        if (appointment.id === action.payload) {
          return {
            ...appointment,
            status: "cancelled",
          };
        }
        return appointment;
      });
    },
  },
});

export const {
  setUserActive,
  setUserAppointments,
  removeUser,
  cancelAppointmentAction,
} = userSlice.actions;
export default userSlice.reducer;
