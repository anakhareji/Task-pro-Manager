import sys
import traceback

with open("debug_log.txt", "w") as log:
    log.write("Starting debug runner...\n")
    try:
        import uvicorn
        log.write(f"Uvicorn imported: {uvicorn.__version__}\n")
        
        import main
        log.write("Main module imported.\n")
        
        log.write("Attempting to run app...\n")
        # running directly
        uvicorn.run(main.app, host="127.0.0.1", port=8000)
    except Exception as e:
        log.write("Crashed!\n")
        log.write(traceback.format_exc())
