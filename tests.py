# tests/test_example.py

import os
import pytest

# Ejemplo de una prueba para verificar que los archivos Python no tienen errores de sintaxis.
def test_no_syntax_errors():
    directory = '.'  # Ruta del directorio donde están tus archivos .py
    for root, _, files in os.walk(directory):
        for file in files:
            if file.endswith('.py'):
                filepath = os.path.join(root, file)
                try:
                    with open(filepath, 'r') as f:
                        compile(f.read(), filepath, 'exec')
                except SyntaxError as e:
                    pytest.fail(f"Error de sintaxis en {filepath}: {e}")

