# `logger` - logging utility class

- logger is a provided logging utility class that allows you to print logs to the console. The visibility of logs depends on the [log level settings](../ide-setting.md#Common), and logs with certain levels may not be displayed.
---

| method  |  return  |  desc  |  Demo  |
| ------------ | ------------ | ------------ |------------ |
| log(str) | void | Prints a log message | logger.log("some log")| 
| trace(str) | void | Prints a log message(log level: trace) | logger.trace("some log")| 
| debug(str) | void | Prints a log message(log level: debug) | logger.debug("some log")| 
| info(str) | void | Prints a log message(log level: info) | logger.info("some log")| 
| warn(str) | void | Prints a log message(log level: warn) | logger.warn("some log")| 
| error(str) | void | Prints a log message(log level: error) | logger.error("some log")| 
