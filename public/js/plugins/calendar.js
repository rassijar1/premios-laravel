/*=============================================
Full calendar
=============================================*/

            $(document).ready(function(){

            var booking=@json($calendar);
            $('#calendar').fullCalendar({

                header: {
                    left: 'prev, next today',
                    center: 'title',
                    right: 'month, agendaWeek, agendaDay',
                },
                events: booking


            });



        });